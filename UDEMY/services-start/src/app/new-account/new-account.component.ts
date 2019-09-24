import { Component } from "@angular/core";
import { LoggingService } from "../logging.service";
import { AccountsService } from "../accounts.service";

@Component({
  selector: "app-new-account",
  templateUrl: "./new-account.component.html",
  styleUrls: ["./new-account.component.css"]
  // providers: [LoggingService]
})
export class NewAccountComponent {
  constructor(
    private logger: LoggingService,
    private actService: AccountsService
  ) {
    this.actService.statusUpdated.subscribe(status =>
      alert("new status:" + status)
    );
  }

  onCreateAccount(accountName: string, accountStatus: string) {
    this.actService.addAccount(accountName, accountStatus);
    // this.logger.logStatusChange(accountStatus);
  }
}
