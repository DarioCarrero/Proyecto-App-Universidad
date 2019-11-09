import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { FacultyPageComponent } from './faculty/faculty-page/faculty-page.component';
import { FacultyListComponent } from './faculty/faculty-list/faculty-list.component';
import { BuildingPageComponent } from './building/building-page/building-page.component';
import { LaboratoryPageComponent } from './laboratory/laboratory-page/laboratory-page.component';


const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'faculty', component: FacultyPageComponent},
  {path: 'faculty-list', component: FacultyListComponent},
  {path: 'building', component: BuildingPageComponent},
  {path: 'laboratory', component: LaboratoryPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
