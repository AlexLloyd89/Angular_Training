import {
  Component,
  OnInit,
  Input,
  OnChanges,
  SimpleChanges,
  DoCheck,
  AfterContentInit,
  AfterContentChecked
} from "@angular/core";

@Component({
  selector: "app-server-element",
  templateUrl: "./server-element.component.html",
  styleUrls: ["./server-element.component.css"]
})
export class ServerElementComponent
  implements OnInit, OnChanges, DoCheck, AfterContentInit, AfterContentChecked {
  @Input() element: { type: string; name: string; content: string };

  constructor() {
    console.log("constructor called");
  }

  ngOnChanges(changes: SimpleChanges) {
    console.log("ON CHANGES");
    console.log(changes);
  }

  ngOnInit() {
    console.log("On Init");
  }

  ngDoCheck() {
    console.log("do check");
  }

  ngAfterContentInit() {
    console.log("after content init");
  }

  ngAfterContentChecked() {
    console.log("after content chhecked");
  }
}
