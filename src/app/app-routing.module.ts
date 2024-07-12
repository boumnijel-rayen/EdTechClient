import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ConfirmAccountComponent } from './Home/confirm-account/confirm-account.component';
import { HomeComponent } from './Home/home/home.component';
import { LoginComponent } from './Home/login/login.component';
import { RegisterComponent } from './Home/register/register.component';
import { AjoutEventComponent } from './Pages/ajout-event/ajout-event.component';
import { DashboardRendezVousComponent } from './Pages/dashboard-rendez-vous/dashboard-rendez-vous.component';
import { GestionUsersComponent } from './Pages/gestion-users/gestion-users.component';
import { ListEventComponent } from './Pages/list-event/list-event.component';
import { ListRendezVousComponent } from './Pages/list-rendez-vous/list-rendez-vous.component';
import { SidebarComponent } from './sidebar/sidebar.component';

const routes: Routes = [
 
  //{ path: '**', redirectTo: '/app/rdv-list' },
  {path: 'app', redirectTo: 'app/list-event'},
  {path: 'app', component: SidebarComponent, children: [
    {path: 'list-event', component: ListEventComponent},
    {path: 'ajout-event', component: AjoutEventComponent},
    {path: 'gestion-users', component: GestionUsersComponent},
    { path: 'dashboard-rendez-vous', component: DashboardRendezVousComponent },
    { path: 'rdv-list', component: ListRendezVousComponent},
    { path: 'dashboard-rendez-vous', component: DashboardRendezVousComponent },

  ]
  },
  {path: 'login', component: LoginComponent, pathMatch: 'full'},
  {path: 'register', component: RegisterComponent, pathMatch: 'full'},
  {path: '', component: HomeComponent, pathMatch: 'full'},
  {path: 'confirm', component: ConfirmAccountComponent, pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
