import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {SharedModule} from "@shared/shared.module";
import { UserListComponent } from './user-list/user-list.component';
import { UserDetailComponent } from './user-detail/user-detail.component';
import {UserRoutingModule} from "@modules/security/user/user-routing.module";
import { UserRoleComponent } from './user-role/user-role.component';
import { DasbhoardComponent } from './access/dasbhoard/dasbhoard.component';



@NgModule({
  declarations: [
    UserListComponent,
    UserDetailComponent,
    UserRoleComponent,
    DasbhoardComponent
  ],
  imports: [
    SharedModule,
    UserRoutingModule
  ]
})
export class UserModule { }
