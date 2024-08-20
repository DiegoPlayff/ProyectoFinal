import { Component, OnInit } from '@angular/core';
import { LugaresService } from 'src/app/services/lugares.service';

@Component({
  selector: 'app-lugares',
  templateUrl: './lugares.component.html',
  styleUrls: ['./lugares.component.scss']
})
export class LugaresComponent implements OnInit{

  lugares:any;

  constructor(
    private lugaresSrv:LugaresService
  ) { }
  ngOnInit(): void {
      this.lugaresSrv.getLugares().subscribe(res => {
        this.lugares = res
      })
  }

}
