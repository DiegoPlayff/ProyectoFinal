import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LandingComponent } from './landing/landing.component';
import { ComponentsModule } from "../components/components.module";
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ErrorComponent } from './error/error.component';
import { AdminComponent } from './admin/admin.component';
import { ReactiveFormsModule } from '@angular/forms';
import { AdminLugaresComponent } from './admin/components/lugares/admin-lugares/admin-lugares.component';
import { AdminTestimoniosComponent } from './admin/components/testimonios/admin-testimonios/admin-testimonios.component';
import { AddAdminLugaresComponent } from './admin/components/lugares/add-admin-lugares/add-admin-lugares.component';
import { EditAdminLugaresComponent } from './admin/components/lugares/edit-admin-lugares/edit-admin-lugares.component';
import { AddAdminTestimoniosComponent } from './admin/components/testimonios/add-admin-testimonios/add-admin-testimonios.component';
import { EditAdminTestimoniosComponent } from './admin/components/testimonios/edit-admin-testimonios/edit-admin-testimonios.component';
import { AdminRedesComponent } from './admin/components/redes/admin-redes/admin-redes.component';
import { EditAdminRedesComponent } from './admin/components/redes/edit-admin-redes/edit-admin-redes.component';
import { AddAdminRedesComponent } from './admin/components/redes/add-admin-redes/add-admin-redes.component';
import { AdminEmpresaComponent } from './admin/components/admin-empresa/admin-empresa.component';
import { AdminAboutComponent } from './admin/components/admin-about/admin-about.component';
import { AdminHeroComponent } from './admin/components/admin-hero/admin-hero.component';



@NgModule({
  declarations: [
    LandingComponent,
    LoginComponent,
    RegisterComponent,
    ErrorComponent,
    AdminComponent,
    AdminLugaresComponent,
    AdminTestimoniosComponent,
    AddAdminLugaresComponent,
    EditAdminLugaresComponent,
    AddAdminTestimoniosComponent,
    EditAdminTestimoniosComponent,
    AdminRedesComponent,
    EditAdminRedesComponent,
    AddAdminRedesComponent,
    AdminEmpresaComponent,
    AdminAboutComponent,
    AdminHeroComponent
  ],
  imports: [
    CommonModule,
    ComponentsModule,
    ReactiveFormsModule,
    RouterModule
],
  exports: [
    LandingComponent
  ]
})
export class PagesModule { }
