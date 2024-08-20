import { Component } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { RedesService } from 'src/app/services/redes.service';

@Component({
  selector: 'app-admin-redes',
  templateUrl: './admin-redes.component.html',
  styleUrls: ['./admin-redes.component.scss']
})
export class AdminRedesComponent {

  redes!: any;
  constructor(
    private redesSrv: RedesService,
    private toastr: ToastrService
  ) {

  }
  deleteRedes(id: number) {
    this.redesSrv.deleteRedes(id).subscribe(res => {
      this.toastr.success("Red eliminada con exito")

      this.redesSrv.getRedes().subscribe(res => {
        this.redes = res
      })

    }, err => {
      this.toastr.error(err.error.msg)
    })
  }
  ngOnInit(): void {
    this.redesSrv.getRedes().subscribe(res => {
      this.redes = res
    })
  }
}
