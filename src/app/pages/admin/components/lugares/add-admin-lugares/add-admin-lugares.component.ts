import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Toast, ToastrService } from 'ngx-toastr';
import { LugaresService } from 'src/app/services/lugares.service';

@Component({
  selector: 'app-add-admin-lugares',
  templateUrl: './add-admin-lugares.component.html',
  styleUrls: ['./add-admin-lugares.component.scss']
})
export class AddAdminLugaresComponent {

  lugarForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private lugaresSrv: LugaresService,
    private toast: ToastrService,
    private router: Router
  ) {
    this.lugarForm = this.fb.group({
      nombre: ['', Validators.required],
      imagen: ['', Validators.required],
      descripcion: ['', Validators.required]
    })

  }

  crearLugar() {

    if (this.lugarForm.invalid) {
      this.toast.error('Todos los campos son obligatorios', 'Error')
      return;
    }

    this.lugaresSrv.createLugar(this.lugarForm.value)
      .subscribe(
        res => {
          this.toast.success('Lugar creado con exito', 'Exito')
          this.router.navigate(['/admin/lugares'])
        },
        (err) => {
          this.toast.error(err.error.msg, 'Error')
        }
      )
  }


}
