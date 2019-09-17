import { Component, Input } from "@angular/core";
import { Isession } from "src/app/shared/event.model";

@Component({
  selector: "session-list",
  templateUrl: "./session-list.component.html"
})
export class SessionListComponent {
  @Input() sessions: Isession[];
}
