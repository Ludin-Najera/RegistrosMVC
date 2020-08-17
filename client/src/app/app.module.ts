import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { HttpClientModule} from '@angular/common/http';
import { FormsModule} from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { InicioFormComponent } from './components/inicio-form/inicio-form.component';
import { InicioListComponent } from './components/inicio-list/inicio-list.component';
import { catFormComponent } from './components/cat-form/cat-form.component';

import {InicioService, CatService} from './services/inicio.service';


@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    InicioFormComponent,
    InicioListComponent,
    catFormComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [
    InicioService,
    CatService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
