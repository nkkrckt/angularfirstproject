import {RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';
import {CookPageComponent} from './cook-page/cook-page.component';
import {ChefPageComponent} from './chef-page/chef-page.component';
import {AdminPageComponent} from './admin-page/admin-page.component';

/**
 * Created by DeadViolonist on 05.09.2017.
 */


const routes: Routes = [
  { path: '', redirectTo: 'cookpage', pathMatch: 'full'},
  { path: 'cookpage', component: CookPageComponent},
  { path: 'chefpage', component: ChefPageComponent},
  { path: 'adminpage', component: AdminPageComponent}
]

@NgModule ({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
