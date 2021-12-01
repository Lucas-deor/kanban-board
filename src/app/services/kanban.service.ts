
import { Quadro } from './../models/quadro.model';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs';




@Injectable({
  providedIn: 'root'
})

export class KanbanService {

  private baseUrl = "http://localhost:3000/quadros";
  // private apiUrl = "http://localhost:5000/login";


  // private quadros: Quadro[] = [
  //   new Quadro(1, 'Dever de Casa', 'fazer dever de Angular'),
  //   new Quadro(2, 'Projeto Java', 'fazer um projeto em java'),
  //   new Quadro(3, 'Projeto C++', 'fazer projeto em c++')
  // ]

  constructor(
    private http: HttpClient
  ) { }

  quadroChanged = new Subject();
  Loggado = new Subject();


  getQuadrosFromServer() {
    return this.http.get<Quadro[]>(this.baseUrl);
  }

  createQuadroOnServer(title: string, content: string) {
    return this.http.post<Quadro>(this.baseUrl, { title: title, content: content });
  }

  deleteQuadroFromServer(id: number) {
    return this.http.delete<Quadro>(`${this.baseUrl}/${id}`)
  }

  updateQuadroFromServer(id: number, form: {name: string, content: string}) {
    return this.http.put<Quadro>(`${this.baseUrl}/${id}`, form);
  }

}
