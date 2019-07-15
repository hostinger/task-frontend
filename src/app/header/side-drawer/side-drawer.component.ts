import { Component, OnInit } from '@angular/core';
import { SideDrawerService } from "../side-drawer.service";

@Component({
  selector: 'app-side-drawer',
  templateUrl: './side-drawer.component.html',
  styleUrls: ['./side-drawer.component.scss']
})
export class SideDrawerComponent implements OnInit {

  constructor(public sideNavService: SideDrawerService) { }

  ngOnInit() {
  }

}
