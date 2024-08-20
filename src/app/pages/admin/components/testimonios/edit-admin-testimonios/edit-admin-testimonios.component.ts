import { TestimoniosService } from 'src/app/services/testimonios.service';
import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-edit-admin-testimonios',
  templateUrl: './edit-admin-testimonios.component.html',
  styleUrls: ['./edit-admin-testimonios.component.scss']
})
export class EditAdminTestimoniosComponent {
  id!: any;
  testimonio: any;
  editForm!: FormGroup;

  constructor(
    private toastr: ToastrService,
    private router: Router,
    private testimoniosSrv: TestimoniosService,
    private fb: FormBuilder
  ) {
    this.editForm = this.fb.group({
      nombre: ['', Validators.required],
      imagen: ['', Validators.required],
      descripcion: ['', Validators.required]
    });
  }

  ngOnInit(): void {
    this.id = window.location.href.split("/").pop();
    this.testimoniosSrv.gettestimonio(this.id).subscribe(res => {
      this.testimonio = res;
      // Actualizar los valores del formulario
      this.editForm.patchValue({
        nombre: this.testimonio.nombre,
        imagen: this.testimonio.imagen,
        descripcion: this.testimonio.descripcion
      });
    }, err => {
      this.toastr.error(err.error.msg, "Error");
      this.router.navigate(["/admin/testimonios"]);
    });
  }

  edittestimonio() {
    if (this.editForm.invalid) {
      this.toastr.error("Todos los campos son obligatorios", "Error");
      return;
    }
    this.testimoniosSrv.edittestimonio(this.id, this.editForm.value)
      .subscribe(
        res => {
          this.toastr.success("testimonio editado con éxito", "Éxito");
          this.router.navigate(["/admin/testimonios"]);
        },
        err => {
          this.toastr.error(err.error.msg, "Error");
        }
      );
  }
}
