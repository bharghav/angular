import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent }  from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './components/pages/home.component';
import { FooterComponent } from './components/footer/footer.component';
import { AboutComponent } from './components/pages/about.component';
import { ContactComponent } from './components/pages/contact.component';
import { routing } from './app-routing.module';
import { RegisterComponent } from './components/pages/register.component';

@NgModule({
  imports:      [ BrowserModule, routing, FormsModule ],
  declarations: [ AppComponent ,
                  NavbarComponent,
                  HomeComponent,
                  FooterComponent,
                  AboutComponent,
                  ContactComponent,
                  RegisterComponent
                ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
