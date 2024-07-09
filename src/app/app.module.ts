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
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HTTP_INTERCEPTORS, HttpClient, HttpClientModule, withFetch } from '@angular/common/http';
import { CardModule } from 'primeng/card';
import { ScrollPanelModule } from 'primeng/scrollpanel';
import { DialogModule } from 'primeng/dialog';
import { GestionUsersComponent } from './Pages/gestion-users/gestion-users.component';
import { CookieService } from 'ngx-cookie-service';
import { ConfirmAccountComponent } from './Home/confirm-account/confirm-account.component';
import { MultiSelectModule } from 'primeng/multiselect';
import { FileUploadModule } from 'primeng/fileupload';
import { ModifEventComponent } from './Pages/modif-event/modif-event.component';
import { MessageService } from 'primeng/api';
import { ToastModule } from 'primeng/toast';


@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    AjoutEventComponent,
    ListEventComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    GestionUsersComponent,
    ConfirmAccountComponent,
    ModifEventComponent
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
    FormsModule,
    BrowserAnimationsModule,  // Required for some PrimeNG components
    InputTextModule,
    CalendarModule,
    ButtonModule,
    HttpClientModule,
    CardModule,
    ScrollPanelModule,
    DialogModule,
    MultiSelectModule,
    FileUploadModule,
    ToastModule
  ],
  providers: [
    CookieService,
    MessageService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
