import { Component } from "@angular/core";
import { EventService } from "./shared/events.service";

@Component({
  selector: "events-list",
  template: `
    <div>
      <h1>Upcoming Angular events</h1>
      <hr />
      <div class="row">
        <div *ngFor="let event of events" class="col-md-5">
          <events-thumbnail [event]="event"></events-thumbnail>
        </div>
      </div>
    </div>
  `
})
export class EventsListComponent {
  events: any[];

  constructor(private eventService: EventService) {}

  ngOnInit() {
    this.events = this.eventService.getEvents();
  }
}
