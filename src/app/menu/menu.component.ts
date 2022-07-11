import { Router } from '@angular/router';
import { environment } from './../../environments/environment.prod';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  nome = environment.nome
  foto = environment.foto

  constructor(
    private router: Router
  ) { }

  ngOnInit() {
    window.scroll(0,0)
    this.validarFoto()
    console.log(this.foto)
  }


  validarFoto() {
    if (environment.foto == null) {
      this.foto = 'https://i.imgur.com/oDdADCG.jpg'
    }
  }


  sair(){
    this.router.navigate(['/entrar'])
    environment.token = ''
    environment.nome = ''
    environment.foto = ''
    environment.id = 0
  }

}