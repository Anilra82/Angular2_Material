import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { PageOneComponent } from './page-one/page-one.component';
import { PageTwoComponent } from './page-two/page-two.component';
import { SettingComponent } from './setting/setting.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    PageOneComponent,
    PageTwoComponent,
    SettingComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
