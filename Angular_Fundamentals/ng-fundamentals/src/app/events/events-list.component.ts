import { Component } from "@angular/core";

@Component({
  selector: "events-list",
  template: `
    <div>
      <h1>Upcoming Angular events</h1>
      <hr />
      <events-thumbnail [event]="event1"></events-thumbnail>
    </div>
  `
})
export class EventsListComponent {
  event1 = {
    id: 1,
    name: "Angular Connect",
    date: "9/26/2036",
    time: "10:00",
    price: 600,
    imageUrl: "/assets/images/angularconnect-shield.png",
    location: {
      address: "1057 DT",
      city: "London",
      country: "England"
    }
  };
}
