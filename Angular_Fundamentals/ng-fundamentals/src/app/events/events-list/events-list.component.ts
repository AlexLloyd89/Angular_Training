import { Component } from "@angular/core";
import { EventService } from "../../services/events.service";

@Component({
  selector: "events-list",
  templateUrl: "./events-list.component.html",
  styleUrls: ["./events-list.component.scss"]
})
export class EventsListComponent {
  events: any[];

  constructor(private eventService: EventService) {}

  ngOnInit() {
    this.events = this.eventService.getEvents();
  }
}
