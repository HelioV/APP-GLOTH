import { Palavra,PalavraExtra} from './../word.model';
import { EditarPlavraComponent } from './../EditarPlavra/EditarPlavra.component';
import { ApiFireBaseService } from './../../../../apiFireBase.service';
import { Component, OnInit,Input } from '@angular/core';
import { MatDialog} from '@angular/material/dialog';
import {FormControl, Validators} from '@angular/forms';

@Component({
  selector: 'app-Significado-Kimbundo',
  templateUrl: './Significado-Kimbundo.component.html',
  styleUrls: ['./Significado-Kimbundo.component.css']
})
export class SignificadoKimbundoComponent implements OnInit {
  nomeNovaPalavra = new FormControl('', [Validators.required]);
  mensagemDeErro:string="";
  typesOfShoes: string[]=[];
  nome:string="";
  @Input('Palavra') palavraEnviada:Palavra=new Palavra();
  public Processing:boolean=false;
  constructor(public dialog: MatDialog,private apiFireBaseUse:ApiFireBaseService) { }
  ngOnInit() {
    this.typesOfShoes=this.palavraEnviada.kibundo.split(",");
  }

  PossuiErro() {
    if (this.nomeNovaPalavra.errors) {
      this.mensagemDeErro=' Campo não pode estar vazio';
      return true;
    } 
    return false;
  }

  openDialog(palavraselecionada:string){
    this.apiFireBaseUse.ArmazenarPlavra(this.palavraEnviada);
    let Palav:PalavraExtra = new PalavraExtra();
    Palav.linguagem="kimbundo";
    Palav.palavraParaExibir=palavraselecionada;
    this.apiFireBaseUse.ArmazenarPlavraExtra(Palav);
    this.dialog.open(EditarPlavraComponent,{
      width: '490px'
    });
  }

  public ListaDoSignificado()
  {
     return this.palavraEnviada.Dividirkibundo();
  }

  ngOnChanges(){
    this.typesOfShoes=this.palavraEnviada.kibundo.split(",");
  }

  public EliminarPalavra(PalavraAeliminar:string)
  {
    
    let palavrasKimbundo=this.palavraEnviada.kibundo.split(",");
    let index=palavrasKimbundo.indexOf(PalavraAeliminar);
    palavrasKimbundo.splice(index, 1);
    this.palavraEnviada.kibundo=palavrasKimbundo.join(',');

    this.apiFireBaseUse.AtualziarPlavra(this.palavraEnviada.key,this.palavraEnviada).then(result=>{
      this.apiFireBaseUse.mostrarResultado("Sucesso","Palavra Atualizada")
     
    }).catch(error=>{
      this.apiFireBaseUse.mostrarResultado("Erro","Não foi feito atualização")
      
    })
  }

  AdicionarPalavra()
  {
    if(!this.PossuiErro())
    {
      this.Processing=true;
      let valores = this.palavraEnviada.kibundo.split(",");
      valores=valores.reverse();
      valores.push(this.nome);
      this.palavraEnviada.kibundo=valores.reverse().join(",");
      this.apiFireBaseUse.AtualziarPlavra(this.palavraEnviada.key,this.palavraEnviada).then(result=>{
        this.apiFireBaseUse.mostrarResultado("Sucesso","Palavra Adicionada")
        this.Processing=false;
        this.nomeNovaPalavra = new FormControl('', [Validators.required]);
      }).catch(error=>{
        this.apiFireBaseUse.mostrarResultado("Erro","Não foi feito atualização")
        this.mensagemDeErro="Tente Novamente mais tarde";
        this.Processing=false;
      }) 
    } else this.apiFireBaseUse.mostrarResultado("Campo vazio","Digite algo se desejares adicionar.")
  }

}
