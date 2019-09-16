import { Component } from "@angular/core";

@Component({
  selector: "pm-root",
  template: `
    <div>
      <div>
        <h1>{{ title }}</h1>
        <div>
          <pm-products></pm-products>
        </div>
      </div>
    </div>
  `
})
export class AppComponent {
  title = "Angular: Getting Started";
}
