import { Component, OnInit } from '@angular/core';
import {Libro} from "./libro";
import { LibroService } from './libro.service';

@Component({
  selector: 'app-libro',
  templateUrl: './libro.component.html',
  styleUrls: ['./libro.component.css']
})
export class LibroComponent implements OnInit {
 title="LibroYA!!"
 subTitle="libreria digital"

libros: Libro[]=[];


  constructor(private libroService: LibroService) { }

  ngOnInit(): void {
    this.getLibros()
  }

  getLibros():void{
    this.libroService.getLibros().subscribe(response =>{
      this.libros=response
    });
  }

}
