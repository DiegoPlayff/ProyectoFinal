import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { EmpresaService } from 'src/app/services/empresa.service';

@Component({
  selector: 'app-admin-empresa',
  templateUrl: './admin-empresa.component.html',
  styleUrls: ['./admin-empresa.component.scss']
})
export class AdminEmpresaComponent implements OnInit{
  editForm!: any;
  empresaData!: any;
  constructor(
    private toastr: ToastrService,
    private fb: FormBuilder,
    private empresaSrv:EmpresaService
  ) {
    this.editForm = this.fb.group({
      nombre: ['', Validators.required],
      direccion: ['', Validators.required],
      telefono: ['', Validators.required],
      mapa: ['', Validators.required]
    });
  }

  ngOnInit(): void {
    this.empresaSrv.getEmpresa().subscribe(res => {
      this.empresaData = res
      this.editForm.patchValue({
        nombre: this.empresaData.nombre,
        direccion: this.empresaData.direccion,
        telefono: this.empresaData.telefono,
        mapa: this.empresaData.mapa
      })
    })
  }
  editEmpresa() {
    console.log(this.editForm.value);
    this.empresaSrv.createAndEditEmpresa(this.editForm.value).subscribe(res => {
      this.toastr.success("Se editó correctamente", "Éxito")
      this.empresaSrv.getEmpresa().subscribe(res => {
        this.empresaData = res
        this.editForm.patchValue({
          titulo: this.empresaData.titulo,
          imagen: this.empresaData.imagen,
          descripcion: this.empresaData.descripcion
        })
      })
    }, err => {
      this.toastr.error(err.error.msg, "Error")
    })
  }
}
