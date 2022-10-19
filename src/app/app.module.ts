import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { AddbookComponent } from './addbook/addbook.component';
import{HttpClientModule} from '@angular/common/http'
import { RouterLink, RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { ViewbookComponent } from './viewbook/viewbook.component';

const link:Routes=[
  {path:"",component:AddbookComponent},
  {path:"view",component:ViewbookComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    AddbookComponent,
    ViewbookComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(link)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
