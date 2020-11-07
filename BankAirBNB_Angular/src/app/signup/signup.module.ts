import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SignupComponent } from './signup.component';
import { FormRegisterComponent } from './components/form-register/form-register.component';
import { ReactiveFormsModule } from '@angular/forms';
import { SingupRoutingModule } from './singup-routing.module';



@NgModule({
  declarations: [SignupComponent, FormRegisterComponent],
  imports: [
    CommonModule, 
    ReactiveFormsModule, SingupRoutingModule
  ]
})
export class SignupModule { }
