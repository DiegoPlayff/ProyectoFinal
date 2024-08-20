import { LugaresService } from 'src/app/services/lugares.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-edit-admin-lugares',
  templateUrl: './edit-admin-lugares.component.html',
  styleUrls: ['./edit-admin-lugares.component.scss']
})
export class EditAdminLugaresComponent implements OnInit {
  id!: any;
  lugar: any;
  editForm!: FormGroup;

  constructor(
    private toastr: ToastrService,
    private router: Router,
    private lugaresSrv: LugaresService,
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
    this.lugaresSrv.getLugar(this.id).subscribe(res => {
      this.lugar = res;
      // Actualizar los valores del formulario
      this.editForm.patchValue({
        nombre: this.lugar.nombre,
        imagen: this.lugar.imagen,
        descripcion: this.lugar.descripcion
      });
    }, err => {
      this.toastr.error(err.error.msg, "Error");
      this.router.navigate(["/admin/lugares"]);
    });
  }

  editLugar() {
    if (this.editForm.invalid) {
      this.toastr.error("Todos los campos son obligatorios", "Error");
      return;
    }
    this.lugaresSrv.editLugar(this.id, this.editForm.value)
      .subscribe(
        res => {
          this.toastr.success("Lugar editado con éxito", "Éxito");
          this.router.navigate(["/admin/lugares"]);
        },
        err => {
          this.toastr.error(err.error.msg, "Error");
        }
      );
  }
}