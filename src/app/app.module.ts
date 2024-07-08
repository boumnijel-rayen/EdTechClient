import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { DialogModule } from 'primeng/dialog';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { AjoutEventComponent } from './Pages/ajout-event/ajout-event.component';
import { ListEventComponent } from './Pages/list-event/list-event.component';
import { LoginComponent } from './Home/login/login.component';
import { RegisterComponent } from './Home/register/register.component';
import { HomeComponent } from './Home/home/home.component';
import { RouterModule } from '@angular/router';
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
import { GestionUsersComponent } from './Pages/gestion-users/gestion-users.component';
import { CookieService } from 'ngx-cookie-service';
import { ConfirmAccountComponent } from './Home/confirm-account/confirm-account.component';
import { MatiereListComponent } from './matiere-list/matiere-list.component';
import { AddMatiereDialogComponent } from './add-matiere-dialog/add-matiere-dialog.component';
import { MatiereExamsComponent } from './matiere-exams/matiere-exams.component';
import { ListeMatiereEtudiantComponent } from './liste-matiere-etudiant/liste-matiere-etudiant.component';


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
    MatiereListComponent,
    AddMatiereDialogComponent,
    MatiereExamsComponent,
    ListeMatiereEtudiantComponent
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
    BrowserAnimationsModule,
    MatDialogModule,
    MatButtonModule,
    MatInputModule,
    MatFormFieldModule,
    TableModule,
    ButtonModule,
    DialogModule,
    BrowserModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    CardModule,
    ButtonModule,
    ScrollPanelModule
    ],
  providers: [
    CookieService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
