import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { HomeComponent } from './home/home.component';
import { FacultyPageComponent } from './faculty/faculty-page/faculty-page.component';
import { FacultyListComponent} from './faculty/faculty-list/faculty-list.component';
import { BuildingPageComponent } from './building/building-page/building-page.component';
import { LaboratoryPageComponent } from './laboratory/laboratory-page/laboratory-page.component';

import { ServiceService } from './service/service.service';


@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    HomeComponent,
    FacultyPageComponent,
    FacultyListComponent,
    BuildingPageComponent,
    LaboratoryPageComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [ServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
