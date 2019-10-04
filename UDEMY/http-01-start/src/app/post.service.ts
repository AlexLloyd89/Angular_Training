import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders, HttpParams } from "@angular/common/http";
import { Post } from "./posts.model";
import { map, tap } from "rxjs/operators";
import { Subject } from "rxjs";

@Injectable({
  providedIn: "root"
})
export class PostService {
  error = new Subject<string>();
  constructor(private http: HttpClient) {}

  createAndStorePost(postData: Post) {
    // const postData: Post = { title, content };
    this.http
      .post<{ name: string }>(
        "https://recipe-ed822.firebaseio.com/posts.json",
        postData,
        {
          observe: "response"
        }
      )
      .subscribe(
        responseData => {
          console.log(responseData);
        },
        error => {
          this.error.next(error.message);
        }
      );
  }

  fetchPosts() {
    return this.http
      .get<{ [key: string]: Post }>(
        "https://recipe-ed822.firebaseio.com/posts.json",
        {
          headers: new HttpHeaders({
            "custom-header": "hi there!"
          }),
          params: new HttpParams().set("print", "pretty")
        }
      )
      .pipe(
        map(responseData => {
          const postsArray: Post[] = [];
          for (const key in responseData) {
            if (responseData.hasOwnProperty(key)) {
              postsArray.push({ ...responseData[key], id: key });
            }
          }
          return postsArray;
        })
      );
  }

  deletePosts() {
    return this.http
      .delete("https://recipe-ed822.firebaseio.com/posts.json", {
        observe: "events"
      })
      .pipe(
        tap(event => {
          console.log(event);
        })
      );
  }
}
