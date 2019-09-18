import { Component, OnInit } from "@angular/core";
import { EventService } from "src/app/shared/events.service";
import { ActivatedRoute } from "@angular/router";
import { IEvent, Isession } from "src/app/shared/event.model";

@Component({
  templateUrl: "./event-details.component.html",
  styleUrls: ["./event-details.component.scss"]
})
export class EventDetailsComponent implements OnInit {
  addMode: boolean;
  event: IEvent;
  filterBy: string = "all";
  sortBy: string = "votes";
  constructor(
    private eventService: EventService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.event = this.eventService.getEvent(+this.route.snapshot.params["id"]);
  }

  addSession() {
    this.addMode = true;
  }

  saveNewSession(session: Isession) {
    const nextId = Math.max.apply(null, this.event.sessions.map(s => s.id));

    session.id = nextId;

    this.event.sessions.push(session);
    this.eventService.updateEvent(this.event);
    this.addMode = false;
  }

  cancelAddSession() {
    this.addMode = false;
  }
}
