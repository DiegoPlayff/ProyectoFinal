import { Component, OnInit } from '@angular/core';
import { RedesService } from 'src/app/services/redes.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit{

  redes!: any
  constructor(
    private redesSrv:RedesService
  ) { }

  ngOnInit(): void {
    this.redesSrv.getRedes().subscribe(res => {
      this.redes = res
    }, err => {
      console.log(err)
    })
  }

}
