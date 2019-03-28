import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root"
})
export class SideDrawerService {
  hideSideNav: boolean = false;
  constructor() {}

  toggleSideNav(): void {
    this.hideSideNav = !this.hideSideNav;
  }

}
