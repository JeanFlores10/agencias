import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AgenciasComponent } from './components/agencias/agencias.component';
import { DetallesComponent } from './components/detalles/detalles.component';


const routes: Routes = [
  {path:'home', component:AgenciasComponent},
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  {
    path:'detalles', component:DetallesComponent
  }
];
@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)
  ],
  exports:[RouterModule]
})
export class AppRoutingModule { }
