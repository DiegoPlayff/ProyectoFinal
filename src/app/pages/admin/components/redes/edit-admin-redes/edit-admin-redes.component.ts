import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { RedesService } from 'src/app/services/redes.service';

@Component({
  selector: 'app-edit-admin-redes',
  templateUrl: './edit-admin-redes.component.html',
  styleUrls: ['./edit-admin-redes.component.scss']
})
export class EditAdminRedesComponent implements OnInit{
  redForm: FormGroup;
  redData: any;
  idRed: any;
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

  
  ngOnInit(): void {
    //Obtener id de la url
    this.idRed = window.location.href.split("/").pop();
    this.redesSrv.getRedesById(this.idRed).subscribe((res: any)=>{
      this.redData = res;

      this.redForm.patchValue({
        nombre: this.redData.nombre,
        link: this.redData.link,
        icono: this.redData.icono
      })
    }, (err) => {
      this.toast.error(err.error.msg, 'Error')
    })
    
  }

  editRed() {
    if (this.redForm.invalid) {
      this.toast.error('Todos los campos son obligatorios', 'Error')
      return;
    }

    this.redesSrv.editRedes(this.idRed,this.redForm.value)
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
