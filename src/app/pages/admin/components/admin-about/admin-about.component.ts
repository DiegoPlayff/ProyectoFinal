import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { AboutService } from 'src/app/services/about.service';

@Component({
  selector: 'app-admin-about',
  templateUrl: './admin-about.component.html',
  styleUrls: ['./admin-about.component.scss']
})
export class AdminAboutComponent implements OnInit{
  editForm!: any;
  aboutData!: any;
  constructor(
    private toastr: ToastrService,
    private fb: FormBuilder,
    private aboutSrv:AboutService
  ) {
    this.editForm = this.fb.group({
      titulo: ['', Validators.required],
      imagen: ['', Validators.required],
      descripcion: ['', Validators.required]
    });
  }

  ngOnInit(): void {
    this.aboutSrv.getAbout().subscribe(res => {
      this.aboutData = res
      this.editForm.patchValue({
        titulo: this.aboutData.titulo,
        imagen: this.aboutData.imagen,
        descripcion: this.aboutData.descripcion
      })
    })
  }
  editAbout() {
    console.log(this.editForm.value);
    this.aboutSrv.createAndEditAbout(this.editForm.value).subscribe(res => {
      this.toastr.success("Se editó correctamente", "Éxito")
      this.aboutSrv.getAbout().subscribe(res => {
        this.aboutData = res
        this.editForm.patchValue({
          titulo: this.aboutData.titulo,
          imagen: this.aboutData.imagen,
          descripcion: this.aboutData.descripcion
        })
      })
    }, err => {
      this.toastr.error(err.error.msg, "Error")
    })
  }
}
