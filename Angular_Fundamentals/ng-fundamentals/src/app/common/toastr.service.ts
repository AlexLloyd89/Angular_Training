import { InjectionToken } from "@angular/core";

export let TOASTR_TOKEN = new InjectionToken<Toastr>("toastr");

export interface Toastr {
  success(msg: string, tittle?: string): void;
  info(msg: string, tittle?: string): void;
  warning(msg: string, tittle?: string): void;
  void(msg: string, tittle?: string): void;
}
