import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { SessionService } from 'src/app/services/session.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  loginForm:FormGroup;

  constructor(
    private fb:FormBuilder,
    private router:Router,
    private toastr:ToastrService,
    private sessionSrv:SessionService
  ){

    this.loginForm = this.fb.group({
      email: ['', Validators.required],
      password: ['', Validators.required]
    })
  }



  login(){
    if (this.loginForm.invalid) {
      this.toastr.error("Todos los campos son obligatorios")
      return 
    }

    let obj = {
      email: this.loginForm.get('email')?.value,
      password: this.loginForm.get('password')?.value
    }


    this.sessionSrv.login(obj).subscribe({
      next: (res:any) => {
        this.toastr.success("Login correcto")
        localStorage.setItem('token', res.token)
        let usuario ={
          name: res.name,
          email: res.email,
          id: res.id
        }
        localStorage.setItem('user', JSON.stringify(usuario))
        this.router.navigate(['/admin'])
      },
      error: (e) => {
        this.toastr.error(e.error.msg)
      }
    })
  }
}
