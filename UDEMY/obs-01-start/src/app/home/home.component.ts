import { Component, OnInit, OnDestroy } from "@angular/core";
import { interval, Subscription, Observable } from "rxjs";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.css"]
})
export class HomeComponent implements OnInit, OnDestroy {
  private firstSubscription: Subscription;

  constructor() {}

  ngOnInit() {
    // this.firstSubscription = interval(1000).subscribe(count => {
    //   console.log(count);
    // });

    const customIntervalObservable = Observable.create(obserever => {
      let count = 0;
      setInterval(() => {
        obserever.next(count);
        if (count > 3) {
          obserever.error(new Error("count > 3"));
        }
        count++;
      }, 1000);
    });

    customIntervalObservable.subscribe(
      data => console.log(data),
      error => console.log(error)
    );
  }
  ngOnDestroy() {
    this.firstSubscription.unsubscribe();
  }
}
