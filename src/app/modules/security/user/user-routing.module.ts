import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {UserListComponent} from "@modules/security/user/user-list/user-list.component";
import {UserDetailComponent} from "@modules/security/user/user-detail/user-detail.component";
import {UserRoleComponent} from "@modules/security/user/user-role/user-role.component";

const routes: Routes = [
  {
    path: 'user-list',
    component: UserListComponent
  },
  {
    path: 'user-detail',
    component: UserDetailComponent
  },
  {
    path:'user-role',
    component:UserRoleComponent
  }
];

@NgModule({
//Se inyectan las rutas que se cargan en este module
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule {
}
