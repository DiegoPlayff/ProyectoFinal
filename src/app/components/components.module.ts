import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavComponent } from './nav/nav.component';
import { HeroComponent } from './hero/hero.component';
import { AboutComponent } from './about/about.component';
import { TestimoniosComponent } from './testimonios/testimonios.component';
import { LugaresComponent } from './lugares/lugares.component';
import { FooterComponent } from './footer/footer.component';
import { RouterModule } from '@angular/router';
import { ContactComponent } from './contact/contact.component';



@NgModule({
  declarations: [
    NavComponent,
    HeroComponent,
    AboutComponent,
    TestimoniosComponent,
    LugaresComponent,
    FooterComponent,
    ContactComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    NavComponent,
    HeroComponent,
    AboutComponent,
    TestimoniosComponent,
    LugaresComponent,
    ContactComponent,
    FooterComponent
  ]
})
export class ComponentsModule { }
