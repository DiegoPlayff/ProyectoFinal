import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { LugaresService } from 'src/app/services/lugares.service';

@Component({
  selector: 'app-admin-lugares',
  templateUrl: './admin-lugares.component.html',
  styleUrls: ['./admin-lugares.component.scss']
})
export class AdminLugaresComponent implements OnInit{
  lugares!:any;
constructor(
  private lugaresSrv:LugaresService,
  private toastr:ToastrService
) {
  
}
  deleteLugar(id: number) {
    this.lugaresSrv.deleteLugar(id).subscribe(res => {
      this.toastr.success("Lugar eliminado con exito")
      
      this.lugaresSrv.getLugares().subscribe(res => {
        this.lugares = res
      })

    }, err => {
      this.toastr.error(err.error.msg)
    })
  }
  ngOnInit(): void {
      this.lugaresSrv.getLugares().subscribe(res => {
        this.lugares = res
      })
  }
}
