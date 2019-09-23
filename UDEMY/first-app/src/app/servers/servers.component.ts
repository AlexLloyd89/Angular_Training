import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-servers",
  templateUrl: "./servers.component.html",
  styleUrls: ["./servers.component.css"]
})
export class ServersComponent implements OnInit {
  allowNewServer: boolean = true;
  serverCreation = "No server was created";
  serverName: string = "Server Name";
  serverCreated = false;
  servers = ["test server", "test server 2"];

  constructor() {
    setTimeout(() => {
      this.allowNewServer = false;
    }, 2000);
  }

  ngOnInit() {}

  onCreateServer() {
    this.serverCreation = "Server was created" + " " + this.serverName;
    this.servers.push(this.serverName);
    this.serverCreated = true;
  }
  onUpdateServerName(event: any) {
    this.serverName = event.target.value;
  }
}
