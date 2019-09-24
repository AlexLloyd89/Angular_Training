import {
  Directive,
  Renderer2,
  OnInit,
  ElementRef,
  HostListener,
  HostBinding,
  Input
} from "@angular/core";

@Directive({
  selector: "[appBetterHighlight]"
})
export class BetterHighlightDirective implements OnInit {
  @Input() defaultColor: string = "transparent";
  @Input() higlightColor: string = "blue";
  @HostBinding("style.backgroundColor") backgroundColor: string = this
    .defaultColor;

  constructor(private elref: ElementRef, private renderer: Renderer2) {}

  ngOnInit() {
    // this.renderer.setStyle(this.elref.nativeElement, "backgroundColor", "blue");
  }
  @HostListener("mouseenter") mouseover(eventData: Event) {
    // this.renderer.setStyle(this.elref.nativeElement, "backgroundColor", "blue");
    this.backgroundColor = this.higlightColor;
  }
  @HostListener("mouseleave") mouseleave(eventData: Event) {
    // this.renderer.setStyle(
    //   this.elref.nativeElement,
    //   "backgroundColor",
    //   "transparent"
    // );
    this.backgroundColor = this.defaultColor;
  }
}
