import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http"
import { environment } from 'src/environments/environment';
import { Libro } from './libro';
import { catchError, map, Observable, pipe, throwError } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class LibroService {

  url: string = "";

  constructor(private http: HttpClient) {

    this.url = environment.apiUrl + "/api";
  }

  getLibros(): Observable<Libro[]> {
    return this.http.get<Libro[]>(this.url + "/libros").pipe(
      map((response: any) => {
        (response.content as Libro[])
        return response;
      })
    );
  }

  create(libro: Libro): Observable<Libro> {
    return this.http.post<Libro>(`${this.url}/libros`, libro).pipe(
      map((response: any) => response.libro as Libro),
      catchError(e => {
        if (e.status == 400) {
          return throwError(() => e);
        }
        if (e.error.mensaje) {
          console.error(e.error.mensaje);
        }
        return throwError(() => e);
      })

    );
  }

  update(libro: Libro): Observable<Libro> {
    return this.http.put<Libro>(`${this.url}/libros/${libro.id}`, libro).pipe(
      catchError(e => {
        if (e.status = 400) {
          return throwError(() => e);
        }
        if (e.error.mensaje) {
          console.error(e.error.mensaje);
        }
        return throwError(() => e);
      })
    )

  }

  delete(id: number): Observable<Libro> {
    return this.http.delete<Libro>(`${this.url}/libros/${id}`).pipe(
      catchError(e => {
        if (e.error.mensaje) {
          console.error(e.error.mensaje);
        }
        return throwError(() => e);
      }
      ));
  }


}
