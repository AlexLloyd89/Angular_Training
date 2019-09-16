import { Component, OnInit } from "@angular/core";
import { UserSettings } from "../data/user-settings";
import { NgForm, NgModel, FormArray } from "@angular/forms";
import { DataService } from "../data/data.service";
import { Observable } from "rxjs";

@Component({
  selector: "app-user-settings-form",
  templateUrl: "./user-settings-form.component.html",
  styleUrls: ["./user-settings-form.component.css"]
})
export class UserSettingsFormComponent implements OnInit {
  originalUserSettings: UserSettings = {
    name: null,
    emailOffers: null,
    interfaceStyle: null,
    subscriptionType: null,
    notes: null
  };

  singleModel = "on";
  startDate: Date;
  startTime: Date;
  userRating = 0;
  maxRating = 10;

  userSettings: UserSettings = { ...this.originalUserSettings };
  postError = false;
  postErrorMessage = "I am an error";
  subscriptionTypes: Observable<string[]>;

  constructor(private dataService: DataService) {}

  ngOnInit() {
    this.subscriptionTypes = this.dataService.getSubscriptionTypes();
    this.startDate = new Date();
    this.startTime = new Date();
  }

  onHttpError(errorResponse: any) {
    this.postError = true;
    this.postErrorMessage = errorResponse.error.errorMessage;
  }

  onSubmit(form: NgForm) {
    console.log("on subbmit", form.valid);

    if (form.valid) {
      this.dataService
        .postUserSettingsForm(this.userSettings)
        .subscribe(
          result => console.log("success: ", result),
          err => this.onHttpError(err)
        );
    } else {
      this.postError = true;
      this.postErrorMessage = "please fix the above errors";
    }
  }

  onBlur(field: NgModel) {
    console.log("onblur", field.valid);
  }
}
