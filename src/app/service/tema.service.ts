import { Observable } from 'rxjs';
import { environment } from './../../environments/environment.prod';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Tema } from '../model/Tema';
import { UserLogin } from '../model/UserLogin';
import { User } from '../model/User';

@Injectable({
  providedIn: 'root'
})
export class TemaService {

  constructor(private http: HttpClient) { }

  token = {
    headers: new HttpHeaders().set('Authorization', environment.token)
  }

  // getAllTema(): Observable<Tema[]>{
  //   return this.http.get<Tema[]>('https://blogpessoalrenan.herokuapp.com/temas', this.token)
  // }

  // getByIdTema(id: number): Observable<Tema>{
  //   return this.http.get<Tema>(`https://blogpessoalrenan.herokuapp.com/temas/${id}`, this.token)
  // }

  // postTema(tema: Tema): Observable<Tema>{
  //   return this.http.post<Tema>('https://blogpessoalrenan.herokuapp.com/temas', tema, this.token)
  // }

  // putTema(tema: Tema): Observable<Tema>{
  //   return this.http.put<Tema>('https://blogpessoalrenan.herokuapp.com/temas', tema, this.token)
  // }

  // deleteTema(id: number) {
  //   return this.http.delete(`https://blogpessoalrenan.herokuapp.com/temas/${id}`, this.token)
  // }

  getAllTema(): Observable<Tema[]>{
    return this.http.get<Tema[]>('http://localhost:8080/temas', this.token)
  }

  getByIdTema(id: number): Observable<Tema>{
    return this.http.get<Tema>(`http://localhost:8080/temas/${id}`, this.token)
  }

  postTema(tema: Tema): Observable<Tema>{
    return this.http.post<Tema>('http://localhost:8080/temas', tema, this.token)
  }

  putTema(tema: Tema): Observable<Tema>{
    return this.http.put<Tema>('http://localhost:8080/temas', tema, this.token)
  }

  deleteTema(id: number) {
    return this.http.delete(`http://localhost:8080/temas/${id}`, this.token)
  }

}