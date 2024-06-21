import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { AjoutEventComponent } from './Pages/ajout-event/ajout-event.component';
import { ListEventComponent } from './Pages/list-event/list-event.component';
import { LoginComponent } from './Home/login/login.component';
import { RegisterComponent } from './Home/register/register.component';
import { HomeComponent } from './Home/home/home.component';
import { RouterModule } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { SidebarModule } from 'primeng/sidebar';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SplitterModule } from 'primeng/splitter';
import {Avatar, AvatarModule} from 'primeng/avatar';
import { MegaMenuModule } from 'primeng/megamenu';
import { CalendarModule } from 'primeng/calendar';
import { InputTextModule } from 'primeng/inputtext';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    AjoutEventComponent,
    ListEventComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    ButtonModule,
    SidebarModule,
    BrowserAnimationsModule,
    SplitterModule,
    AvatarModule,
    MegaMenuModule,
    BrowserModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,  // Required for some PrimeNG components
    InputTextModule,
    CalendarModule,
    ButtonModule,
    HttpClientModule
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
