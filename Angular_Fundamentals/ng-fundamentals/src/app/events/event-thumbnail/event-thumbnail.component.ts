import { Component, Input } from "@angular/core";
import { IEvent } from "src/app/shared/event.model";

@Component({
  selector: "events-thumbnail",
  template: `
    <div [routerLink]="['/events', event.id]" class="well hoverwell thumbnail">
      <h2>{{ event?.name | uppercase }}</h2>
      <div>Date :{{ event?.date }}</div>
      <div>Time :{{ event?.time }}</div>
      <div [ngClass]="getStartTimeClass()" [ngSwitch]="event?.time">
        <span *ngSwitchCase="'8:00 am'">Early Start</span>
        <span *ngSwitchCase="'10:00 am'">Late Start</span>
        <span *ngSwitchDefault>Normal Start</span>
      </div>
      <div>Price : \${{ event?.price }}</div>
      <div *ngIf="event?.location">
        <span> Location: {{ event?.location?.address }}</span>

        <span class="pad-left"
          >{{ event?.location?.city }}, {{ event?.location?.country }}</span
        >
      </div>
      <div *ngIf="event?.onlineUrl">Online URL: {{ event?.onlineUrl }}</div>
    </div>
  `,
  styles: [
    `
      .pad-left {
        margin-left: 10px;
      }
      .thumbnail {
        min-height: 210px;
      }

      .green {
        color: green !important;
      }

      .bold {
        font-weight: bold;
      }
    `
  ]
})
export class EventsThumbnailComponent {
  @Input() event: IEvent;

  getStartTimeClass() {
    const isEarlyStart = this.event && this.event.time === "8:00 am";
    return { green: isEarlyStart, bold: isEarlyStart };
  }
}
