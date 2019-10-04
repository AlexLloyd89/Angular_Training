import { Component, OnInit } from "@angular/core";
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { AuthService } from "./auth.service";
import { Router } from "@angular/router";

@Component({
  selector: "app-auth",
  templateUrl: "./auth.component.html"
})
export class AuthComponent implements OnInit {
  isLoginMode: boolean = true;
  authForm: FormGroup;
  isLoading: boolean = false;
  error: string = null;
  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit() {
    this.authForm = new FormGroup({
      email: new FormControl("", [Validators.required, Validators.email]),
      password: new FormControl("", [
        Validators.required,
        Validators.minLength(6)
      ])
    });
  }

  onSwitchMode() {
    this.isLoginMode = !this.isLoginMode;
  }

  onSubmit(formData) {
    if (!formData.valid) {
      return;
    }
    const email = formData.value.email;
    const password = formData.value.password;
    this.isLoading = true;

    if (this.isLoginMode) {
      this.authService.login(email, password).subscribe(
        resData => {
          this.router.navigate(["/recipes"]);
          console.log(resData);
          this.isLoading = false;
        },
        errorMessage => {
          this.error = errorMessage;

          this.isLoading = false;
        }
      );
    } else {
      this.authService.signUp(email, password).subscribe(
        resData => {
          this.router.navigate(["/recipes"]);
          console.log(resData);
          this.isLoading = false;
        },
        errorMessage => {
          this.error = errorMessage;

          this.isLoading = false;
        }
      );
    }

    formData.reset();
  }
}
