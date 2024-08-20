import { Component, OnInit } from '@angular/core';
import { HeroService } from 'src/app/services/hero.service';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.scss']
})
export class HeroComponent implements OnInit {

  heroData!: any;

  constructor(
    private heroSrv: HeroService
  ) { }

  ngOnInit(): void {
    this.heroSrv.getHero().subscribe(res => {
      this.heroData = res
      console.log(this.heroData);
    })
  }

}
