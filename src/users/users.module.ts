import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsersRoutingModule } from './users-routing.module';
import { ViewProfileComponent } from './view-profile/view-profile.component';
import { LoginComponent } from './login/login.component';
import { EditProfileComponent } from './edit-profile/edit-profile.component';


@NgModule({
  declarations: [
    ViewProfileComponent,
    LoginComponent,
    EditProfileComponent
  ],
  imports: [
    CommonModule,
    UsersRoutingModule
  ],
  
})
export class UsersModule { 
}
