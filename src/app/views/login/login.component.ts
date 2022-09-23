import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/models/user';
import { LoginService } from 'src/app/services/login.service';
import { Login } from 'src/app/models/login';
 

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private loginService: LoginService, private router:Router) {}

  ngOnInit(): void {
  }

  
  loginModel = new Login();
  userModel = new User();
  mensagem=''
  

  receberDados(){
    console.log(this.userModel)
    this.loginService.login(this.userModel).subscribe((response) =>{
      console.log(response);
      
      const listaPalavras: string[]=["select ","from ", "drop ", "or ", "having ", "group ", "by ", "insert ", "exec ", "\'", "\"","--","#","*",";"]
      // this.router.navigateByUrl("/")
      listaPalavras.forEach(palavra =>{
        if(this.loginModel.email?.toLowerCase().includes(palavra)){
          this.mensagem ="Dados inválidos!"


        return
      }
      })

      if(response.statusText == "OK"){
        this.mensagem = "Login feito com sucesso!"
      }  
    }, (respostaErro) =>{
      console.log("Deu errado")
      // alert(respostaErro.error);

      if( respostaErro.error == "Incorrect password"){
        this.mensagem = "Senha incorreta"
      }else if(respostaErro.error == "Email and password are required"){
        this.mensagem = "Email e senha são necessárias"
      }else if(respostaErro.error == "Password is too short"){ 
        this.mensagem = "Senha muito curta"
        
      }else if(respostaErro.error == "Email format is invalid"){
        this.mensagem = "Formato de email inválido"

      }else{
        this.mensagem = respostaErro.error
      }
    })
  }
}
