import { ApiFireBaseService } from './../../../../apiFireBase.service';
import { Palavra,PalavraExtra } from './../word.model';
import { Component, OnInit,Input } from '@angular/core';
@Component({
  selector: 'app-EditarPlavra',
  templateUrl: './EditarPlavra.component.html',
  styleUrls: ['./EditarPlavra.component.css']
})
export class EditarPlavraComponent implements OnInit {

   public nome:string="" 
   public smsresult:String="";
   public Processing:boolean=false;
   public PalavraPassada:Palavra=new Palavra();
   public PalavraExtra:PalavraExtra=new PalavraExtra();
  constructor(private apiFireBaseUse:ApiFireBaseService) { }
  ngOnInit() {
    this.PalavraPassada=this.apiFireBaseUse.pegarPlavraArmazenada();
    this.PalavraExtra=this.apiFireBaseUse.pegarPlavraExtraArmazenada();
    
  }

  SalvarPlavra()
  {
    this.Processing=true;
    if(this.PalavraExtra.linguagem=="Portugues")
    {
      this.PalavraPassada.portuguese=this.nome;
      this.apiFireBaseUse.AtualziarPlavra(this.PalavraPassada.key,this.PalavraPassada).then(result=>{
        this.apiFireBaseUse.mostrarResultado("Sucesso","Palavra Atualizada")
        this.Processing=false;
      }).catch(error=>{
        this.Processing=false;
        this.apiFireBaseUse.mostrarResultado("Erro","Não foi feito atualização")
      })

    }else if(this.PalavraExtra.linguagem=="kimbundo")
    {

      this.apiFireBaseUse.AtualziarPlavra(this.PalavraPassada.key,this.AtualizarKimbundo(this.PalavraPassada,this.nome,this.PalavraExtra.palavraParaExibir)).then(result=>{
        this.apiFireBaseUse.mostrarResultado("Sucesso","Palavra Atualizada")
        this.Processing=false;
      }).catch(error=>{
        this.apiFireBaseUse.mostrarResultado("Erro","Não foi feito atualização")
        this.Processing=false;
      })
    } else if(this.PalavraExtra.linguagem=="kikongo")
    {
     
      this.apiFireBaseUse.AtualziarPlavra(this.PalavraPassada.key,this.AtualizarKikongo(this.PalavraPassada,this.nome,this.PalavraExtra.palavraParaExibir)).then(result=>{
        this.apiFireBaseUse.mostrarResultado("Sucesso","Palavra Atualizada")
        this.Processing=false;
      }).catch(error=>{
        this.apiFireBaseUse.mostrarResultado("Erro","Não foi feito atualização")
        this.Processing=false;
      })
    }
  }

  private AtualizarKikongo(Palavr:Palavra,NovaPlavra:string,PlavraAntiga:string)
  {
    
      let palavrasKimbundo=Palavr.kikongo.split(",");
      palavrasKimbundo[palavrasKimbundo.indexOf(PlavraAntiga)]=NovaPlavra;
      Palavr.kikongo=palavrasKimbundo.join(',');
      return Palavr;
  }

  private AtualizarKimbundo(Palavr:Palavra,NovaPlavra:string,PlavraAntiga:string)
  {
      let palavrasKimbundo=Palavr.kibundo.split(",");
      palavrasKimbundo[palavrasKimbundo.indexOf(PlavraAntiga)]=NovaPlavra;
      Palavr.kibundo=palavrasKimbundo.join(',');
      return Palavr;
  }


}
