import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import {
  EventsListComponent,
  EventsThumbnailComponent,
  EventService,
  EventDetailsComponent,
  EventRouteActivator,
  EventListResolver,
  CreateSessionComponent,
  SessionListComponent,
  DurationPipe
} from "./events/index";
import { AppComponent } from "./app.component";
import { NavBarComponent } from "./nav/navbar.component";
import { TOASTR_TOKEN, Toastr } from "./common/toastr.service";
import { appRoutes } from "./routes";
import { RouterModule } from "@angular/router";
import { CreateEventComponent } from "./events/create-event.component";
import { Error404Component } from "./errors/404.component";
import { AuthService } from "./user/auth.service";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { CollapsibleWellComponent } from "./common/collapsible-well.component";

declare let toastr: Toastr;

@NgModule({
  declarations: [
    AppComponent,
    EventsListComponent,
    EventsThumbnailComponent,
    EventDetailsComponent,
    NavBarComponent,
    Error404Component,
    CreateEventComponent,
    CreateSessionComponent,
    SessionListComponent,
    CollapsibleWellComponent,
    DurationPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  exports: [EventsListComponent],
  providers: [
    EventService,
    { provide: TOASTR_TOKEN, useValue: toastr },
    EventRouteActivator,
    EventListResolver,
    AuthService,
    { provide: "canDeactivateCreateEvent", useValue: checkDirtyState }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}

export function checkDirtyState(component: CreateEventComponent) {
  if (component.isDirty) {
    return window.confirm(
      "you have not saved this event, do you still want to cancel?"
    );
  }
  return true;
}
