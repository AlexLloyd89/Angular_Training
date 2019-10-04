import { Component, OnInit, OnDestroy } from "@angular/core";
import { HttpClient } from "@angular/common/http";

import { Post } from "./posts.model";
import { PostService } from "./post.service";
import { Subscription } from "rxjs";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent implements OnInit, OnDestroy {
  loadedPosts = [];
  isLoading = false;
  error = null;

  private errorSub: Subscription;

  constructor(private ps: PostService) {}

  ngOnInit() {
    this.errorSub = this.ps.error.subscribe(errMessage => {
      this.error = errMessage;
    });
    this.isLoading = true;
    this.ps.fetchPosts().subscribe(
      posts => {
        this.isLoading = false;
        this.loadedPosts = posts;
      },
      error => {
        this.error = error.message;
      }
    );
  }

  onCreatePost(postData: Post) {
    // Send Http request
    try {
      this.ps.createAndStorePost(postData);
    } catch (err) {
      console.log(err, "sorry an error has occured");
    }
  }

  onFetchPosts() {
    this.isLoading = true;
    this.ps.fetchPosts().subscribe(
      posts => {
        this.isLoading = false;
        this.loadedPosts = posts;
      },
      error => {
        this.error = error.message;
      }
    );
  }

  onClearPosts() {
    try {
      this.ps.deletePosts().subscribe(() => {
        this.loadedPosts = [];
      });
    } catch (err) {
      alert("error occured");
    }
  }

  ngOnDestroy() {
    this.errorSub.unsubscribe();
  }
}
