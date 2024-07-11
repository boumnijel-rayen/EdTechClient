import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SidebarComponent } from './sidebar/sidebar.component';
import { ListEventComponent } from './Pages/list-event/list-event.component';
import { AjoutEventComponent } from './Pages/ajout-event/ajout-event.component';
import { LoginComponent } from './Home/login/login.component';
import { RegisterComponent } from './Home/register/register.component';
import { HomeComponent } from './Home/home/home.component';
import { ClassesComponent } from './classes/classes.component';
import { GestionUsersComponent } from './Pages/gestion-users/gestion-users.component';
import { ConfirmAccountComponent } from './Home/confirm-account/confirm-account.component';
import { ModifEventComponent } from './Pages/modif-event/modif-event.component';
import { StatsUserComponent } from './Pages/stats-user/stats-user.component';
import { RestaurantComponent } from './restaurant/restaurant.component';
import { AjouterRepasComponent } from './ajouter-repas/ajouter-repas.component';
import { ListRendezVousComponent } from './Pages/list-rendez-vous/list-rendez-vous.component';
import { MatiereListComponent } from './matiere-list/matiere-list.component';
import { MatiereExamsComponent } from './matiere-exams/matiere-exams.component';
import { ListeMatiereEtudiantComponent } from './liste-matiere-etudiant/liste-matiere-etudiant.component';
import { ListeMatiereEnsComponent } from './liste-matiere-ens/liste-matiere-ens.component';

const routes: Routes = [
  {path: 'app', redirectTo: 'app/list-event' },
  {path: 'app', component: SidebarComponent, children: [
    {path: 'list-event', component: ListEventComponent},
    {path: 'ajout-event', component: AjoutEventComponent},
    {path: 'classes', component: ClassesComponent, pathMatch: 'full'},
    {path: 'gestion-users', component: GestionUsersComponent},
    {path: 'modif-event/:id', component: ModifEventComponent},
    {path: 'gestion-users', component: GestionUsersComponent},
    {path: 'stats-user', component: StatsUserComponent},
    {path: 'gestion-users', component: GestionUsersComponent},
    {path: 'Restaurant', component: RestaurantComponent},
    {path: 'AjouterRepas', component: AjouterRepasComponent},
    { path: 'rdv-list', component: ListRendezVousComponent},
    {path: 'gestion-users', component: GestionUsersComponent},
    { path: 'matieres', component: MatiereListComponent },
    { path: 'matieres-etudiant', component: ListeMatiereEtudiantComponent },
    { path: 'matieres/:id/exams', component: MatiereExamsComponent },
    { path: 'matieres-ens', component: ListeMatiereEnsComponent },
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
