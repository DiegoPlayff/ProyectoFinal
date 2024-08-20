import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingComponent } from './pages/landing/landing.component';
import { LoginComponent } from './pages/login/login.component';
import { AdminComponent } from './pages/admin/admin.component';
import { ErrorComponent } from './pages/error/error.component';
import { RegisterComponent } from './pages/register/register.component';
import { adminGuard } from './guards/admin.guard';
import { AdminLugaresComponent } from './pages/admin/components/lugares/admin-lugares/admin-lugares.component';
import { AdminTestimoniosComponent } from './pages/admin/components/testimonios/admin-testimonios/admin-testimonios.component';
import { AddAdminLugaresComponent } from './pages/admin/components/lugares/add-admin-lugares/add-admin-lugares.component';
import { EditAdminLugaresComponent } from './pages/admin/components/lugares/edit-admin-lugares/edit-admin-lugares.component';
import { AddAdminTestimoniosComponent } from './pages/admin/components/testimonios/add-admin-testimonios/add-admin-testimonios.component';
import { EditAdminTestimoniosComponent } from './pages/admin/components/testimonios/edit-admin-testimonios/edit-admin-testimonios.component';
import { AdminRedesComponent } from './pages/admin/components/redes/admin-redes/admin-redes.component';
import { AddAdminRedesComponent } from './pages/admin/components/redes/add-admin-redes/add-admin-redes.component';
import { EditAdminRedesComponent } from './pages/admin/components/redes/edit-admin-redes/edit-admin-redes.component';
import { AdminEmpresaComponent } from './pages/admin/components/admin-empresa/admin-empresa.component';
import { AdminHeroComponent } from './pages/admin/components/admin-hero/admin-hero.component';
import { AdminAboutComponent } from './pages/admin/components/admin-about/admin-about.component';

const routes: Routes = [
  { path: '', component: LandingComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  {
    path: 'admin', component: AdminComponent, canActivate: [adminGuard],
    children: [
      { path: 'lugares', component: AdminLugaresComponent },
      { path: 'lugares/add', component: AddAdminLugaresComponent },
      { path: 'lugares/edit/:id', component: EditAdminLugaresComponent },
      { path: '', redirectTo: 'lugares', pathMatch: 'full' },
      { path: 'testimonios', component: AdminTestimoniosComponent },
      { path: 'testimonios/add', component: AddAdminTestimoniosComponent },
      { path: 'testimonios/edit/:id', component: EditAdminTestimoniosComponent },
      { path: 'redes', component: AdminRedesComponent },
      { path: 'redes/add', component: AddAdminRedesComponent },
      { path: 'redes/edit/:id', component:EditAdminRedesComponent },
      { path: 'empresa', component: AdminEmpresaComponent },
      { path: 'hero', component: AdminHeroComponent },
      { path: 'about', component: AdminAboutComponent },
    ]
  },
  { path: 'error', component: ErrorComponent },
  { path: '**', redirectTo: 'error', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
