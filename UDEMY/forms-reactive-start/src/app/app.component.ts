import { Component, OnInit } from "@angular/core";
import { FormGroup, FormControl, Validators, FormArray } from "@angular/forms";
import { Observable } from "rxjs";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent implements OnInit {
  genders = ["male", "female"];
  signupForm: FormGroup;
  forbiddenUN = ["chris", "anna"];

  ngOnInit() {
    this.signupForm = new FormGroup({
      userData: new FormGroup({
        username: new FormControl("", [
          Validators.required,
          this.forbiddenNames
        ]),
        email: new FormControl(
          "",
          [Validators.required, Validators.email],
          this.forbiddenEmail
        )
      }),

      gender: new FormControl("male"),
      hobbies: new FormArray([])
    });
    this.signupForm.valueChanges.subscribe(value => console.log(value));
    this.signupForm.statusChanges.subscribe(value => console.log(value));
  }

  onSubmit() {
    console.log(this.signupForm.value);
  }

  onAddHobby() {
    const control = new FormControl(null, Validators.required);
    (<FormArray>this.signupForm.get("hobbies")).push(control);
  }

  getControls() {
    return (<FormArray>this.signupForm.get("hobbies")).controls;
  }
  forbiddenNames = (control: FormControl): { [key: string]: boolean } => {
    if (this.forbiddenUN.indexOf(control.value) !== -1) {
      return { nameIsForbidden: null };
    }
    return null;
  };

  forbiddenEmail(control: FormControl): Promise<any> | Observable<any> {
    const promise = new Promise<any>((resolve, reject) => {
      setTimeout(() => {
        if (control.value === "test@test.com") {
          resolve({ emailIsForbidden: true });
        } else {
          resolve(null);
        }
      }, 1500);
    });
    return promise;
  }
}
