import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccueilComponent } from './accueil/accueil.component';
import { ResidenceEditComponent } from './residence/residence-edit/residence-edit.component';

const routes: Routes = [
  {path:'',component:AccueilComponent},
  {path:'Ajouter',component:ResidenceEditComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
