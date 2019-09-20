import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";
import { allBooks, allReaders } from "app/data";
import { Reader } from "app/models/reader";
import { Book } from "app/models/book";
import { map, tap } from "rxjs/operators";

import { OldBook } from "../models/oldBook";

@Injectable()
export class DataService {
  constructor(private http: HttpClient) {}

  mostPopularBook: Book = allBooks[0];

  setMostPopularBook(popularBook: Book): void {
    this.mostPopularBook = popularBook;
  }

  getAllReaders(): Reader[] {
    return allReaders;
  }

  getReaderById(id: number): Reader {
    return allReaders.find(reader => reader.readerID === id);
  }

  getAllBooks(): Observable<Book[]> {
    console.log(`Getting all books`);
    return this.http.get<Book[]>("/api/books");
  }

  getBookById(id: number): Observable<Book> {
    return this.http.get<Book>(`/api/books/${id}`, {
      //This is saying what type of data we want to return from the call
      headers: new HttpHeaders({
        Accept: "application/json",
        Authorization: "my-token"
      })
    });
  }

  getOldBookById(id: number): Observable<OldBook> {
    return this.http.get<Book>(`/api/books/${id}`).pipe(
      map(
        b =>
          <OldBook>{
            bookTitle: b.title,
            year: b.publicationYear
          }
      ),
      tap(classicBook => console.log(classicBook))
    );
  }

  addBook(newBook: Book): Observable<Book> {
    return this.http.post<Book>("/api/books", newBook, {
      headers: new HttpHeaders({
        "Content-Type": "application/json"
      })
    });
  }
  updateBook(updatedBook: Book): Observable<void> {
    return this.http.put<void>(
      `/api/books/${updatedBook.bookID}`,
      updatedBook,
      {
        headers: new HttpHeaders({
          "Content-Type": "application/json"
        })
      }
    );
  }

  deleteBook(bookId: number): Observable<void> {
    return this.http.delete<void>(`/api/books/${bookId}`);
  }
}
