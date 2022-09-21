import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/models/user';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private loginService: LoginService, private router:Router) {}

  ngOnInit(): void {
  }

  userModel = new User();
  mensagem=''

  receberDados(){
    console.log(this.userModel)
    this.loginService.login(this.userModel).subscribe((response) =>{
      console.log(response);
      localStorage.setItem("nomeUsuario", response.body.user.name);
      this.router.navigateByUrl("/")      
    }, (respostaErro) =>{
      console.log("Deu errado")
      // alert(respostaErro.error);

      if( respostaErro.error == "Incorrect password"){
        this.mensagem = "Senha incorreta"
      }else if(respostaErro.error == "Email and password are required"){
        this.mensagem = "Email e senha são necessárias"
      }else if(respostaErro.error == "Password is too short"){ 
        this.mensagem = "Senha muito curta"
        
      }else{
        this.mensagem = respostaErro.error
      }
    })
  }
}
