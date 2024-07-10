import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SidebarComponent } from './sidebar/sidebar.component';
import { ListEventComponent } from './Pages/list-event/list-event.component';
import { AjoutEventComponent } from './Pages/ajout-event/ajout-event.component';
import { LoginComponent } from './Home/login/login.component';
import { RegisterComponent } from './Home/register/register.component';
import { HomeComponent } from './Home/home/home.component';
import { GestionUsersComponent } from './Pages/gestion-users/gestion-users.component';
import { ConfirmAccountComponent } from './Home/confirm-account/confirm-account.component';
import { RestaurantComponent } from './restaurant/restaurant.component';
import { AjouterRepasComponent } from './ajouter-repas/ajouter-repas.component';

const routes: Routes = [
  {path: 'app', redirectTo: 'app/list-event'},
  {path: 'app', component: SidebarComponent, children: [
    {path: 'list-event', component: ListEventComponent},
    {path: 'ajout-event', component: AjoutEventComponent},
    {path: 'gestion-users', component: GestionUsersComponent},
    {path: 'Restaurant', component: RestaurantComponent},
    {path: 'AjouterRepas', component: AjouterRepasComponent}

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
