import { HttpClientModule, provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatNativeDateModule } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
// import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
// import { CookieService } from 'ngx-cookie-service';
import { ConfirmationService, MessageService } from 'primeng/api';
// import { AvatarModule } from 'primeng/avatar';
// import { ButtonModule } from 'primeng/button';
import { CalendarModule } from 'primeng/calendar';
import { CardModule } from 'primeng/card';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
// import { DialogModule } from 'primeng/dialog';
import { DropdownModule } from 'primeng/dropdown';
import { InputTextModule } from 'primeng/inputtext';
import { MegaMenuModule } from 'primeng/megamenu';
// import { MultiSelectModule } from 'primeng/multiselect';
import { ScrollPanelModule } from 'primeng/scrollpanel';
import { SidebarModule } from 'primeng/sidebar';
import { SplitterModule } from 'primeng/splitter';
import { TableModule } from 'primeng/table';
import { TagModule } from 'primeng/tag';
import { ToolbarModule } from 'primeng/toolbar';
// import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from'@angular/platform-browser'; 
// import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { DialogModule } from 'primeng/dialog';
import { MatDialogModule } from'@angular/material/dialog'; 
import { MatButtonModule } from'@angular/material/button'; 
import { MatInputModule } from'@angular/material/input'; 
import { MatFormFieldModule } from'@angular/material/form-field'; 
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
// import { ConfirmAccountComponent } from './Home/confirm-account/confirm-account.component';
// import { HomeComponent } from './Home/home/home.component';
import { LoginComponent } from './Home/login/login.component';
import { RegisterComponent } from './Home/register/register.component';
import { AjoutEventComponent } from './Pages/ajout-event/ajout-event.component';
import { AppointmentDialogComponent } from './Pages/appointment-dialog/appointment-dialog.component';
// import { GestionUsersComponent } from './Pages/gestion-users/gestion-users.component';
// import { CookieService } from 'ngx-cookie-service';
// import { ConfirmAccountComponent } from './Home/confirm-account/confirm-account.component';
import { MultiSelectModule } from 'primeng/multiselect';
import { FileUploadModule } from 'primeng/fileupload';
import { ModifEventComponent } from './Pages/modif-event/modif-event.component';
// import { MessageService } from 'primeng/api';
import { ToastModule } from 'primeng/toast';
import { StatsUserComponent } from './Pages/stats-user/stats-user.component';
import { ChartModule } from 'primeng/chart';
import { RestaurantComponent } from './restaurant/restaurant.component';
import { AjouterRepasComponent } from './ajouter-repas/ajouter-repas.component';
import { ListEventComponent } from './Pages/list-event/list-event.component';
import { ListRendezVousComponent } from './Pages/list-rendez-vous/list-rendez-vous.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { HomeComponent } from './Home/home/home.component';
// import { RouterModule } from '@angular/router';
// import { SidebarModule } from 'primeng/sidebar';
// import { BrowserAnimationsModule } from'@angular/platform-browser/animations'; 
// import { SplitterModule } from 'primeng/splitter';
import {Avatar, AvatarModule} from 'primeng/avatar';
// import { MegaMenuModule } from 'primeng/megamenu';
// import { CalendarModule } from 'primeng/calendar';
// import { InputTextModule } from 'primeng/inputtext';
// import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HTTP_INTERCEPTORS, HttpClient, withFetch } from '@angular/common/http';
// import { CardModule } from 'primeng/card';
// import { ScrollPanelModule } from 'primeng/scrollpanel';
import { GestionUsersComponent } from './Pages/gestion-users/gestion-users.component';
import { CookieService } from 'ngx-cookie-service';
import { ConfirmAccountComponent } from './Home/confirm-account/confirm-account.component';
import { MatiereListComponent } from './matiere-list/matiere-list.component';
import { AddMatiereDialogComponent } from './add-matiere-dialog/add-matiere-dialog.component';
import { MatiereExamsComponent } from './matiere-exams/matiere-exams.component';
import { ListeMatiereEtudiantComponent } from './liste-matiere-etudiant/liste-matiere-etudiant.component';
import { ListeMatiereEnsComponent } from './liste-matiere-ens/liste-matiere-ens.component';
import { ExamenEnsComponent } from './examen-ens/examen-ens.component';


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
    ModifEventComponent,
    StatsUserComponent,
    AjouterRepasComponent,
    ListRendezVousComponent,
    AppointmentDialogComponent,
    MatiereListComponent,
    AddMatiereDialogComponent,
    MatiereExamsComponent,
    ListeMatiereEtudiantComponent,
    ListeMatiereEnsComponent,
    ExamenEnsComponent,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
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
    ToastModule,
    ChartModule,
    RestaurantComponent,  
    TagModule,
    ConfirmDialogModule,
    ToolbarModule,
    DropdownModule,
    MatDatepickerModule,
    MatNativeDateModule,
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
    ScrollPanelModule,
    TableModule,
     RouterModule.forRoot([
      { path: 'restaurant', component: RestaurantComponent }
    ])
    
  ],
  providers: [
    CookieService,
    MessageService,
    ConfirmationService,
    provideHttpClient(withInterceptorsFromDi())
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
