import { Component, OnInit } from '@angular/core';

import { SideDrawerService } from "../side-drawer.service";

@Component({
  selector: 'app-burger-button',
  templateUrl: './burger-button.component.html',
  styleUrls: ['./burger-button.component.scss']
})
export class BurgerButtonComponent implements OnInit {

  constructor(public sideNavService: SideDrawerService) { }

  ngOnInit() {
  }

}
