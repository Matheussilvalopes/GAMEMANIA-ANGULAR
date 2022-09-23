import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user';
import{CadastroService} from "src/app/services/cadastro.service";


@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent implements OnInit {

  constructor(private cadastroService: CadastroService) { }

  ngOnInit(): void {
  }
  
  userModel = new User();
  mensagem = ' ';

  cadastrarDados(){
    this.cadastroService.cadastro(this.userModel).subscribe((response) =>{
      console.log(response)
      if(response.statusText == "Created"){
        this.mensagem = "Cadastro feito com sucesso!"
      }      
  }, (respostaErro) =>{
    if( respostaErro.error == "Incorrect password"){
      this.mensagem = "Senha incorreta"
    }else if(respostaErro.error == "Email and password are required"){
      this.mensagem = "Email e senha são necessárias"
    }else if(respostaErro.error == "Password is too short"){ 
      this.mensagem = "Senha muito curta"
    }else if(respostaErro.error == "Email already exists"){
      this.mensagem = "Email já cadastrado."
    }else{
      this.mensagem = respostaErro.error;
      
    }
  })
  }
}
