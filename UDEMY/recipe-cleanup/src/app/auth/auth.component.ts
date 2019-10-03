import { Component, OnInit } from "@angular/core";
import { FormGroup, FormControl, Validators } from "@angular/forms";

@Component({
  selector: "app-auth",
  templateUrl: "./auth.component.html"
})
export class AuthComponent implements OnInit {
  constructor() {}
  authForm: FormGroup;
  isLoginMode: boolean = true;

  onSwitchMode() {
    this.isLoginMode = !this.isLoginMode;
  }

  ngOnInit() {
    this.initForm();
  }

  private initForm() {
    this.authForm = new FormGroup({
      email: new FormControl("", [Validators.required, Validators.email]),
      password: new FormControl("", [
        Validators.required,
        Validators.minLength(6)
      ])
    });
  }
  onSubmit(formData) {
    console.log(formData.getRawValue());
    formData.reset();
  }
}
