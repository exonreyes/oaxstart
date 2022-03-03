import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {SharedModule} from "@shared/shared.module";
import { UserListComponent } from './user-list/user-list.component';



@NgModule({
  declarations: [
    UserListComponent
  ],
  imports: [
    SharedModule
  ]
})
export class UserModule { }
