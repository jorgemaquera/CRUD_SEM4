import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ReadComponent } from './Category/read/read.component';
import { SaveComponent } from './Category/save/save.component';
import { EditComponent } from './Category/edit/edit.component';

const routes: Routes = [
  {path: 'listar', component:ReadComponent},
  {path: 'agregar', component:SaveComponent},
  {path: 'editar', component:EditComponent}  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
