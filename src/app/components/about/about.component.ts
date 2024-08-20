import { Component, OnInit } from '@angular/core';
import { AboutService } from 'src/app/services/about.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit{
  aboutData:any;
  constructor(
    private abaoutSrv:AboutService
  ) { }

  ngOnInit(): void {
    this.abaoutSrv.getAbout().subscribe(res => {
      this.aboutData = res
      console.log(this.aboutData);
    })
  }
}
