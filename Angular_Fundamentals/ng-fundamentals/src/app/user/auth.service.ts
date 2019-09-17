import { Injectable } from "@angular/core";
import { IUser } from "./usre.model";

@Injectable()
export class AuthService {
  currentUser: IUser;
  loginUser(userName: string, password: string) {
    this.currentUser = {
      id: 1,
      userName: "username",
      firstName: "John",
      lastName: "papa"
    };
  }

  isAuthenticated() {
    return !!this.currentUser;
  }
}
