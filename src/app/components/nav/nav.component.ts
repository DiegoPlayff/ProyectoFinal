import { AfterViewInit, Component, OnInit } from '@angular/core';
import { RedesService } from 'src/app/services/redes.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements AfterViewInit, OnInit {

  redes!:any;
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
  ngAfterViewInit(): void {
    let nav = document.getElementsByClassName("header-nav")[0] as HTMLElement;
    let navMovil = document.getElementsByClassName("header-mobile")[0] as HTMLElement;
    let top = 80;
    let topMovil = 100;
    // Ver si la pagina esta al inicio
    setInterval(() => {
      window.scrollY !== 0 ? nav.style.top = '0' : nav.style.top = top - window.pageYOffset + 'px';
      window.scrollY !== 0 ? navMovil.style.top = '0' : navMovil.style.top = topMovil - window.pageYOffset + 'px';
      let viewport = window.innerWidth;
      if (viewport < 992) {
        window.addEventListener('scroll', () => {
          if (window.pageYOffset > topMovil) {
            navMovil.style.top = '0';
          } else {
            navMovil.style.top = topMovil - window.pageYOffset + 'px';
          }
        })
      } else {
        window.onscroll = () => {
          if (window.pageYOffset > top) {
            nav.style.top = '0';
          } else {
            nav.style.top = top - window.pageYOffset + 'px';
          }
        }
      }

    }, 100);
  }

  openNav() {
    let nav = document.getElementById('myNav') as HTMLElement;
    let open = document.getElementById('OpenMenu') as HTMLElement;
    let close = document.getElementById('CloseMenu') as HTMLElement;
    nav.style.display = 'block';
    open.style.display = 'none';
    close.style.display = 'block';
  }

  closeNav() {
    let nav = document.getElementById('myNav') as HTMLElement;
    let open = document.getElementById('OpenMenu') as HTMLElement;
    let close = document.getElementById('CloseMenu') as HTMLElement;
    nav.style.display = 'none';
    open.style.display = 'block';
    close.style.display = 'none';
  }


  scrollToSection(section: string) {
    let scroll = document.querySelector('#' + section) as HTMLElement;
    scroll.scrollIntoView({
      behavior: 'smooth'
    });

    this.closeNav();
  }
}
