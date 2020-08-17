import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {InicioListComponent} from './components/inicio-list/inicio-list.component';
import {InicioFormComponent} from './components/inicio-form/inicio-form.component';
import {catFormComponent} from './components/cat-form/cat-form.component';

const routes: Routes = [
{
  path: '',
  redirectTo: '/inicio',
  pathMatch: 'full'
},
{
  path: 'inicio',
  component: InicioListComponent
},
{
  path: 'estudiante',
  component:  InicioFormComponent

},
{
  path: 'catedratico',
  component:  catFormComponent

},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
