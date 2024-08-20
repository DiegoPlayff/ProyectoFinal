import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { TestimoniosService } from 'src/app/services/testimonios.service';

@Component({
  selector: 'app-add-admin-testimonios',
  templateUrl: './add-admin-testimonios.component.html',
  styleUrls: ['./add-admin-testimonios.component.scss']
})
export class AddAdminTestimoniosComponent {
  
  testimonioForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private testimoniosSrv: TestimoniosService,
    private toast: ToastrService,
    private router: Router
  ) {
    this.testimonioForm = this.fb.group({
      nombre: ['', Validators.required],
      imagen: ['', Validators.required],
      descripcion: ['', Validators.required]
    })

  }

  creartestimonio() {

    if (this.testimonioForm.invalid) {
      this.toast.error('Todos los campos son obligatorios', 'Error')
      return;
    }

    this.testimoniosSrv.createtestimonio(this.testimonioForm.value)
      .subscribe(
        res => {
          this.toast.success('testimonio creado con exito', 'Exito')
          this.router.navigate(['/admin/testimonios'])
        },
        (err) => {
          this.toast.error(err.error.msg, 'Error')
        }
      )
  }

}
