import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';
import { UnluckyService } from './unlucky.service';

import { AppComponent } from './app.component';
import { HomepageComponent } from './homepage/homepage.component';

const appRoutes: Routes = [
  {
    path:'',
    component: HomepageComponent
  }
];

@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    HttpClientModule
  ],
  providers: [UnluckyService],
  bootstrap: [AppComponent]
})
export class AppModule { }
