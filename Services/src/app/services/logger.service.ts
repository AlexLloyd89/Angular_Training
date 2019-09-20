import { Injectable } from "@angular/core";

//providedIn allows us to not have to import this to the app.module.to file. It will also detect if we are actually using it or not. If not then it wont compile, resulting in a smaller app size!
@Injectable({
  providedIn: "root"
})
export class LoggerService {
  log(message: string): void {
    const timeString: String = new Date().toLocaleTimeString();
    console.log(`${message} (${timeString})`);
  }
  error(message: string): void {
    console.error(`ERROR ${message}`);
  }
}
