import { Component } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { TestimoniosService } from 'src/app/services/testimonios.service';

@Component({
  selector: 'app-admin-testimonios',
  templateUrl: './admin-testimonios.component.html',
  styleUrls: ['./admin-testimonios.component.scss']
})
export class AdminTestimoniosComponent {
  testimonios!:any;
  constructor(
    private testimoniosSrv:TestimoniosService,
    private toastr:ToastrService
  ) {
    
  }
    deletetestimonio(id: number) {
      this.testimoniosSrv.deletetestimonio(id).subscribe(res => {
        this.toastr.success("testimonio eliminado con exito")
        
        this.testimoniosSrv.getTestimonios().subscribe(res => {
          this.testimonios = res
        })
      
      }, err => {
        this.toastr.error(err.error.msg)
      })
    }
    ngOnInit(): void {
        this.testimoniosSrv.getTestimonios().subscribe(res => {
          this.testimonios = res
        })
    }
}
