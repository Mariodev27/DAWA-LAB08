import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CrearProductoComponent } from './components/crear-producto/crear-producto.component';
import { EditarProductoComponent } from './components/editar-producto/editar-producto.component';
import { ProductoComponent } from './components/producto/producto.component';



const routes: Routes = [
  {path: '', component: ProductoComponent},
  {path: 'crear-producto', component: CrearProductoComponent},
  {path: 'editar-producto/:codigo', component: EditarProductoComponent},
  { path: '**', redirectTo: '', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
