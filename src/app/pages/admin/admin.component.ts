import { Component, HostListener, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { SessionService } from 'src/app/services/session.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {

  constructor(
    private router:Router,
    private sessionSrv:SessionService,
    private toastr:ToastrService
  ) { }
  menuOpen: boolean = false;

  ngOnInit(): void {
    this.checkWindowSize();
    let url = location.href;
    let urlActual = url.split("/").pop();
    let icono = document.getElementsByClassName(urlActual+"_selected")[0] as HTMLElement;
    let selected = document.getElementsByClassName("selected") as HTMLCollectionOf<HTMLElement>;
    icono.classList.add("selected");
    selected[0].classList.remove("selected");
  }

  ngAfterViewInit(): void {
    this.addMenuEventListener();
  }

  addMenuEventListener(): void {
    const btnOpen = document.getElementById("btn_open");
    if (btnOpen) {
      btnOpen.addEventListener("click", this.openCloseMenu.bind(this));
    }
  }

  openCloseMenu(): void {
    const body = document.getElementById("body") as HTMLElement;
    const sideMenu = document.getElementById("menu_side") as HTMLElement;
    const mainContent = document.getElementById("main_content") as HTMLElement;
    const header = document.getElementById("header") as HTMLElement;

    if (body && sideMenu && mainContent && header) {
      body.classList.toggle("body_move");
      sideMenu.classList.toggle("menu__side_move");
      mainContent.classList.toggle("main_move");
      header.classList.toggle("header_move");

      // Cambia el estado del menú
      this.menuOpen = !this.menuOpen;
    }
  }

  checkWindowSize(): void {
    if (window.innerWidth < 760 && this.menuOpen) {
      // Si la pantalla es pequeña y el menú está abierto, cierra el menú
      this.openCloseMenu();
    }
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: Event): void {
    this.checkWindowSize();
  }

  logout() {
    localStorage.clear();
    this.sessionSrv.logout();
    this.toastr.error("Sesión cerrada correctamente", "Cierre de sesión")
    this.router.navigate(['/login'])
  }

  cambiarSelected(event: any) {
    let selected = document.getElementsByClassName("selected") as HTMLCollectionOf<HTMLElement>;
    const targetElement = event.target;

    if (targetElement.tagName === 'I') {
      selected[0].classList.remove("selected");
      event.target.parentNode.parentNode.classList.add("selected");
    } else if (targetElement.tagName === 'DIV') {
      selected[0].classList.remove("selected");
      event.target.parentNode.classList.add("selected");
    }else{
      selected[0].classList.remove("selected");
      event.target.parentNode.parentNode.classList.add("selected");
    }


  }
}
