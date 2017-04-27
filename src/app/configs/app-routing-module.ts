import {RouterModule, Routes} from "@angular/router";
import {HomeComponent} from "../home/home.component";
import {AdminHomeComponent} from "../admin-home/admin-home.component";
import {NgModule} from "@angular/core";
import {MyPlansComponent} from "../my-plans/my-plans.component";
const appRoutes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'users',
    component: AdminHomeComponent
  },
  {
    path: 'my-plans',
    component: MyPlansComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
