import { ApiFireBaseService } from './../apiFireBase.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {Usuario,UsuarioInterface} from '../material-component/Words/Palavra/word.model';
import { map } from 'rxjs/operators';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  smsresult:string="";
  pass:string="";
  nome:string="";
  cadastring:boolean=false;
  public Processing:boolean=false;
  public todasPalavrasDoFirebase:UsuarioInterface[]=[];
  constructor(private router: Router,private apiFireBaseUse:ApiFireBaseService) { }

  ngOnInit() {
    
  }

  EntrarNoSistema()
  {
    this.Processing=true;
    if(this.pass=="" || this.nome==""){this.Processing=false;this.smsresult="Preencha os dois campos";}
    else if (this.pass=="Tuling" && this.nome=="Tuling") {this.Processing=false;this.cadastring=true;}
    else 
    {
    this.cadastring=false;
    this.apiFireBaseUse.pegarTodosUsuarios().snapshotChanges().pipe(
      map(changes =>
        changes.map(c =>
          ({ key: c.payload.key, ...c.payload.val() })
        )
      )
    ).subscribe(todosUsuarios => {
      
      this.todasPalavrasDoFirebase=todosUsuarios;
      this.todasPalavrasDoFirebase.forEach(usuario=>{
        if(usuario.nome==this.nome && usuario.senha==this.pass )
        {
          this.apiFireBaseUse.GuaradarNomeUusario(this.nome);
          this.router.navigate(['/dashboard']);
        }
      })
      this.Processing=false;
      this.smsresult="Senha ou Nome Incorreto";
    });

  }
  }

  cadastrarUsuario()
  {

    if(this.pass=="" || this.nome==""){this.Processing=false;this.smsresult="Preencha os dois campos"; }
    else if (this.pass=="Tuling" && this.nome=="Tuling") {
      this.smsresult="";
      this.apiFireBaseUse.mostrarResultado("Tipo de Usuario","Este cadastro foi rejeitado")
    }
    else {
      let usuarioExemplo:Usuario=new Usuario();
    usuarioExemplo.nome=this.nome;
    usuarioExemplo.senha=this.pass;
    this.apiFireBaseUse.inserirUmUsuario(usuarioExemplo);
    this.smsresult="Cadastrado com sucesso";
    }
    
  }

}
