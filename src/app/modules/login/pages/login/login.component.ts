import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import Swal from 'sweetalert2';
import { AuthService } from '../../services/auth.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  loginForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private router: Router
  ) {
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]],
    });
  }

  onSubmit() {
    if (this.loginForm.valid) {
      const { email, password } = this.loginForm.value;
      this.authService.login(email, password).then(
        (res) => {
          Swal.fire('Bienvenido!');
          this.router.navigateByUrl('/bienvenida');
        },
        (error) => {
          console.error(error);
          Swal.fire({
            icon: 'error',
            title: 'Error!!!',
            text: error.message
          });
        }
      );
    }
  }

   logAdmin() {
    this.loginForm.patchValue({
      email: 'admin@admin.com',
      password: '123321'
    });
  }

  logEmpleado() {
    this.loginForm.patchValue({
      email: 'empleado@empleado.com',
      password: '123321'
    });
  }

  getLoggedUser() {
    this.authService.getLoggedUser().subscribe(
      (res) => {
        console.log(res?.email);
      },
      (err) => {
        Swal.fire({
          icon: 'error',
          title: 'Error!!!',
          text: err.message
        });
      }
    );
  }
}

