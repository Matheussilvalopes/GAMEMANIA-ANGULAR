import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public titulo! : string;
  public texto! : string;
  public texto1! : string;
  public texto2! : string;
  
  classToDiv={}

  constructor() { }

  ngOnInit(): void {
    this.titulo! ='Seja Gamer';
    this.texto! ="Venha você também entrar no mundo mágico dos games! Oferecemos uma alta gama de periféricos para seu computador, tornando você mais competitivo em seus jogos!"
    this.texto1! ="Não tem um computador potente o suficiente para jogar? Não tem o console do momento? Não tem problema! Aqui na Game Mania temos todas as peças para aprimorar seu computador e todos os consoles de última geração, fazendo com que você consiga jogar o que quiser!" 
    this.texto2! ="Se não sabe como aprimorar seu computador está tudo bem, temos a possibilidade de montar o seu PC!";
  }

}
