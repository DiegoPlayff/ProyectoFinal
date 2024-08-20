import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { HeroService } from 'src/app/services/hero.service';

@Component({
  selector: 'app-admin-hero',
  templateUrl: './admin-hero.component.html',
  styleUrls: ['./admin-hero.component.scss']
})
export class AdminHeroComponent {
  editForm!: any;
  heroData!: any;
  constructor(
    private toastr: ToastrService,
    private fb: FormBuilder,
    private heroSrv:HeroService
  ) {
    this.editForm = this.fb.group({
      imagen: ['', Validators.required],
      nombre: ['', Validators.required],
      descripcion: ['', Validators.required]
    });
  }

  ngOnInit(): void {
    this.heroSrv.getHero().subscribe(res => {
      this.heroData = res;
      this.editForm.patchValue({
        imagen: this.heroData.imagen,
        nombre: this.heroData.nombre,
        descripcion: this.heroData.descripcion
      });
      console.log(this.editForm.value);
    });
  }
  
  editHero() {
    console.log(this.editForm.value);
    this.heroSrv.createAndEditHero(this.editForm.value).subscribe(res => {
      this.toastr.success("Se editó correctamente", "Éxito")
      this.heroSrv.getHero().subscribe(res => {
        this.heroData = res
        this.editForm.patchValue({
          titulo: this.heroData.titulo,
          imagen: this.heroData.imagen,
          descripcion: this.heroData.descripcion
        })
      })
    }, err => {
      this.toastr.error(err.error.msg, "Error")
    })
  }
}
