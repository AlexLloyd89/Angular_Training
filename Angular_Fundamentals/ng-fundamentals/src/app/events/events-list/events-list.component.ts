import { Component } from "@angular/core";
import { EventService } from "../../services/events.service";
import { TestService } from '../../services/test.service';

@Component({
  selector: "events-list",
  templateUrl: './events-list.component.html',
  styleUrls: ['./events-list.component.scss']
})
export class EventsListComponent {
  events: any[];

  constructor(private testService: TestService) {}

  ngOnInit() {
    // this.events = this.eventService.getEvents();
  }
}
