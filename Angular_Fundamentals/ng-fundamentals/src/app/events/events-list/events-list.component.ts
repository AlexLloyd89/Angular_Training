import { Component } from "@angular/core";
import { ToastrService } from "src/app/common/toastr.service";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: "events-list",
  templateUrl: "./events-list.component.html",
  styleUrls: ["./events-list.component.scss"]
})
export class EventsListComponent {
  events: any;

  constructor(private toastr: ToastrService, private route: ActivatedRoute) {}

  ngOnInit() {
    this.events = this.route.snapshot.data["events"];
  }

  handleThumbnailClick(eventName) {
    this.toastr.success(eventName);
  }
}
