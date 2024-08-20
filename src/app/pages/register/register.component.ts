import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { SessionService } from 'src/app/services/session.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {
  registerForm:FormGroup;
  constructor(
    private fb:FormBuilder,
    private sessionSrv:SessionService,
    private toastr:ToastrService,
    private router:Router
  ){
    this.registerForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', Validators.required],
      password: ['', Validators.required]
    })
  }

  register(){
    if (this.registerForm.invalid) {
      this.toastr.error("Todos los campos son obligatorios")
      return 
    }
    let obj = {
      name: this.registerForm.get('name')?.value,
      email: this.registerForm.get('email')?.value,
      password: this.registerForm.get('password')?.value
    }


    this.sessionSrv.register(obj).subscribe({
      next: (res) => {
        this.toastr.success("Usuario registrado correctamente")
        this.router.navigate(['/login'])
      },
      error: (e) => {
        this.toastr.error(e.error.msg)
      }
    })
  }
}
