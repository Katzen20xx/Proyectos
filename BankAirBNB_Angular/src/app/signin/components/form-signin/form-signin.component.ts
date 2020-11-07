import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators} from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user/user.service';

@Component({
  selector: 'app-form-signin',
  templateUrl: './form-signin.component.html',
  styleUrls: ['./form-signin.component.scss']
})
export class FormSigninComponent implements OnInit {

  public formGroup: FormGroup; 
  public loginFaild: string

  constructor(private formBuilder: FormBuilder,
              private userService: UserService,
              private route: Router) { }

  ngOnInit(): void {
    this.formLogin();
  }

  private formLogin(): void {
    this.formGroup = this.formBuilder.group({
    email: ['', [ Validators.required, Validators.email ]],
    password: ['', Validators.required]
    });
  }

  public getError (controlName: string): string {
    let error = '';
    const control = this.formGroup.get(controlName);
    if (control.touched && control.errors != null) {
      error = this.errorMapping(control.errors)
    }
    return error;    
  }

  private errorMapping (errors: any): string {
    console.log('errors', errors);
    let errorsMessage = '';
    if (errors.required) {
      errorsMessage += 'Campo Obligatorio. '
    }
    if (errors.email) {
      errorsMessage += 'Debes ingresar un correo válido. ';
    }
    return errorsMessage;
  }

  public irNuevoUsuario(): void {
    this.route.navigate(['/signup']);
  }

  public login(): void {
    const data = this.formGroup.value;
    console.log('data login', data);    
    this.userService.loginUser(data).subscribe(response => {
      if (response.status === 1) {
        localStorage.setItem('token', response.token);
        this.route.navigate(['/home']);        
      } else {
        this.loginFaild = 'Datos incorrectos'
      }
    });

    
    
  }

}