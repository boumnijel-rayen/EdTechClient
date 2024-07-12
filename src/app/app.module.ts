import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatNativeDateModule } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { ConfirmationService, MessageService } from 'primeng/api';
import { AvatarModule } from 'primeng/avatar';
import { ButtonModule } from 'primeng/button';
import { CalendarModule } from 'primeng/calendar';
import { CardModule } from 'primeng/card';
import { ChartModule } from 'primeng/chart';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { DialogModule } from 'primeng/dialog';
import { DropdownModule } from 'primeng/dropdown';
import { InputTextModule } from 'primeng/inputtext';
import { MegaMenuModule } from 'primeng/megamenu';
import { MultiSelectModule } from 'primeng/multiselect';
import { ScrollPanelModule } from 'primeng/scrollpanel';
import { SidebarModule } from 'primeng/sidebar';
import { SplitterModule } from 'primeng/splitter';
import { TableModule } from 'primeng/table';
import { TagModule } from 'primeng/tag';
import { ToastModule } from 'primeng/toast';
import { ToolbarModule } from 'primeng/toolbar';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ConfirmAccountComponent } from './Home/confirm-account/confirm-account.component';
import { HomeComponent } from './Home/home/home.component';
import { LoginComponent } from './Home/login/login.component';
import { RegisterComponent } from './Home/register/register.component';
import { AjoutEventComponent } from './Pages/ajout-event/ajout-event.component';
import { AppointmentDialogComponent } from './Pages/appointment-dialog/appointment-dialog.component';
import { DashboardRendezVousComponent } from './Pages/dashboard-rendez-vous/dashboard-rendez-vous.component';
import { GestionUsersComponent } from './Pages/gestion-users/gestion-users.component';
import { ListEventComponent } from './Pages/list-event/list-event.component';
import { ListRendezVousComponent } from './Pages/list-rendez-vous/list-rendez-vous.component';
import { SidebarComponent } from './sidebar/sidebar.component';



@NgModule({ declarations: [
        AppComponent,
        SidebarComponent,
        AjoutEventComponent,
        ListEventComponent,
        LoginComponent,
        RegisterComponent,
        HomeComponent,
        GestionUsersComponent,
        ConfirmAccountComponent,
        ListRendezVousComponent,
        AppointmentDialogComponent,
        DashboardRendezVousComponent
    ],
    bootstrap: [AppComponent],
    schemas: [CUSTOM_ELEMENTS_SCHEMA], imports: [
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
        BrowserAnimationsModule, // Required for some PrimeNG components
        InputTextModule,
        CalendarModule,
        ButtonModule,
        CardModule,
        ScrollPanelModule,
        DialogModule,
        TableModule,
        MultiSelectModule,
        TagModule,
        ConfirmDialogModule,
        ToolbarModule,
        DropdownModule,
        MatDatepickerModule,
        MatNativeDateModule,
        ToastModule,
        ChartModule,
      ], providers: [
        CookieService,ConfirmationService, MessageService,
        provideHttpClient(withInterceptorsFromDi())
    ] })
export class AppModule { }
