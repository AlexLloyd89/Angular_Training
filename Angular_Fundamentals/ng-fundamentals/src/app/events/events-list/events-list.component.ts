import { Component } from "@angular/core";

import { ActivatedRoute } from "@angular/router";
import { IEvent } from "src/app/shared/event.model";

@Component({
  selector: "events-list",
  templateUrl: "./events-list.component.html",
  styleUrls: ["./events-list.component.scss"]
})
export class EventsListComponent {
  events: IEvent[];

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.events = this.route.snapshot.data["events"];
  }
}
