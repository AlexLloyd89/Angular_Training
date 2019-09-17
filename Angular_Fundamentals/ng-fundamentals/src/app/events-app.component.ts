import { Component } from "@angular/core";

@Component({
  selector: "events-app-root",
  template: `
    <events-list></events-list>
  `
})
export class EventsAppComponent {
  title = "app";
}
