import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";
import { HeaderComponent } from './header/header.component';
import { BannerComponent } from './banner/banner.component';
import { BurgerButtonComponent } from './header/burger-button/burger-button.component';
import { SideDrawerComponent } from './header/side-drawer/side-drawer.component';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BannerComponent,
    BurgerButtonComponent,
    SideDrawerComponent,
 
  ],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
