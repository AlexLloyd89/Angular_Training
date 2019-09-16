import { Component, OnInit } from "@angular/core";
import { UserSettings } from "../data/user-settings";
import { NgForm, NgModel } from "@angular/forms";

@Component({
  selector: "app-user-settings-form",
  templateUrl: "./user-settings-form.component.html",
  styleUrls: ["./user-settings-form.component.css"]
})
export class UserSettingsFormComponent implements OnInit {
  originalUserSettings: UserSettings = {
    name: null,
    emailOffers: true,
    interfaceStyle: "dark",
    subscriptionType: "Annual",
    notes: "test notes..."
  };

  userSettings: UserSettings = { ...this.originalUserSettings };
  constructor() {}

  ngOnInit() {}

  onSubmit(form: NgForm) {
    console.log("on subbmit", form.valid);
  }

  onBlur(field: NgModel) {
    console.log("onblur", field.valid);
  }
}
