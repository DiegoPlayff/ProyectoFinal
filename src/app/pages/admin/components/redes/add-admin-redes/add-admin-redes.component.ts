import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { RedesService } from 'src/app/services/redes.service';

@Component({
  selector: 'app-add-admin-redes',
  templateUrl: './add-admin-redes.component.html',
  styleUrls: ['./add-admin-redes.component.scss']
})
export class AddAdminRedesComponent {

  redForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private redesSrv: RedesService,
    private toast: ToastrService,
    private router: Router
  ) {
    this.redForm = this.fb.group({
      nombre: ['', Validators.required],
      link: ['', Validators.required],
      icono: ['', Validators.required]
    })

  }

  crearRed() {

    if (this.redForm.invalid) {
      this.toast.error('Todos los campos son obligatorios', 'Error')
      return;
    }

    this.redesSrv.createRedes(this.redForm.value)
      .subscribe(
        res => {
          this.toast.success('Red creada con exito', 'Exito')
          this.router.navigate(['/admin/redes'])
        },
        (err) => {
          this.toast.error(err.error.msg, 'Error')
        }
      )
  }


}
