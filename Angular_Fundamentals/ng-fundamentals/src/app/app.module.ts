import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";
import { EventsListComponent } from "./events/events-list/events-list.component";
import { EventsThumbnailComponent } from "./events/event-thumbnail/event-thumbnail.component";
import { NavBarComponent } from "./nav/navbar.component";
import { EventService } from "./services/events.service";
import { TestService } from './services/test.service';

@NgModule({
  declarations: [
    AppComponent,
    EventsListComponent,
    EventsThumbnailComponent,
    NavBarComponent
  ],
  imports: [BrowserModule],
  exports: [EventsListComponent],
  providers: [EventService, TestService],
  bootstrap: [AppComponent],
})
export class AppModule {}
