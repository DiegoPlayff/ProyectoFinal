import { Component, OnInit, AfterViewChecked } from '@angular/core';
import { TestimoniosService } from 'src/app/services/testimonios.service';

@Component({
  selector: 'app-testimonios',
  templateUrl: './testimonios.component.html',
  styleUrls: ['./testimonios.component.scss']
})
export class TestimoniosComponent implements OnInit, AfterViewChecked {

  testimonios: any;
  private carouselInitialized = false;

  constructor(private testimonioSrv: TestimoniosService) {}

  ngOnInit(): void {
    this.testimonioSrv.getTestimonios().subscribe(res => {
      this.testimonios = res;
    });
  }

  ngAfterViewChecked(): void {
    if (!this.carouselInitialized && this.testimonios && this.testimonios.length > 0) {
      this.initCarousel();
      this.carouselInitialized = true;
    }
  }

  initCarousel(): void {
    let currentIndex = 0;
    const testimoniosContainer = document.querySelector('.testimonios-container') as HTMLElement;
    const testimonios = document.querySelectorAll('.testimonios-card') as NodeListOf<HTMLElement>;
    const totalTestimonios = testimonios.length;

    document.getElementById('next')?.addEventListener('click', () => {
      currentIndex = (currentIndex + 1) % totalTestimonios;
      testimoniosContainer.style.transform = `translateX(-${currentIndex * 100}%)`;
    });

    document.getElementById('prev')?.addEventListener('click', () => {
      currentIndex = (currentIndex - 1 + totalTestimonios) % totalTestimonios;
      testimoniosContainer.style.transform = `translateX(-${currentIndex * 100}%)`;
    });

    // Autoplay
    setInterval(() => {
      document.getElementById('next')?.click();
    }, 10000); // Cambia cada 10 segundos
  }
}
