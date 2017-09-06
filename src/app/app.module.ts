import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule} from '@angular/router';
import { AppComponent } from './app.component';
import { CookPageComponent } from './cook-page/cook-page.component';
import { ChefPageComponent } from './chef-page/chef-page.component';
import { AdminPageComponent } from './admin-page/admin-page.component';
import { ModalWindowComponent } from './modal-window/modal-window.component';
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import {InMemoryDataService} from './in-memory-data.service';
import {MealsService} from './meals.service';
import { AppRoutingModule} from './app-routing.module';



@NgModule({
  declarations: [
    AppComponent,
    CookPageComponent,
    ChefPageComponent,
    AdminPageComponent,
    ModalWindowComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    FormsModule,
    InMemoryWebApiModule.forRoot(InMemoryDataService),
    HttpModule
    // RouterModule.forRoot({path: 'cookpage', component: 'CookPageComponent'})
  ],
  providers: [MealsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
