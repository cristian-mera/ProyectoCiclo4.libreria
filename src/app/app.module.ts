import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {RouterModule, Routes} from "@angular/router"
import {HttpClientModule} from "@angular/common/http"
import { FormsModule } from '@angular/forms';

//SERVICIOS
import {LibroService} from "./libro/libro.service"

//COMPONENTES
import { AppComponent } from './app.component';
import { LibroComponent } from './libro/libro.component';
import { HeaderComponent } from './header/header.component';


const routes=[
  {path:"", redirectTo: "/libros" , pathMatch: "full"},
  {path:"libros", component:LibroComponent},
]

@NgModule({
  declarations: [
    AppComponent,
    LibroComponent,
    HeaderComponent,
    FormsModule
  
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    HttpClientModule
  ],
  providers: [LibroService],
  bootstrap: [AppComponent],
  
})
export class AppModule { }
