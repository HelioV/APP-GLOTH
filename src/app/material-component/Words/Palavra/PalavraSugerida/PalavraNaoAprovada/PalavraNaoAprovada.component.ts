import { EditarPlavraComponent } from './../../EditarPlavra/EditarPlavra.component';
import { ApiFireBaseService } from './../../../../../apiFireBase.service';
import { Component, OnInit,EventEmitter,Output } from '@angular/core';
import {PlavraInterface,Palavra,PalavraExtra} from '../../word.model';
import { map } from 'rxjs/operators';
import { MatSnackBar} from '@angular/material/snack-bar';
import { MatDialog} from '@angular/material/dialog';
@Component({
  selector: 'app-PalavraNaoAprovada',
  templateUrl: './PalavraNaoAprovada.component.html',
  styleUrls: ['./PalavraNaoAprovada.component.css']
})


export class PalavraNaoAprovadaComponent implements OnInit {

  public todasPalavrasDoFirebase:PlavraInterface[]=[];
  
  public Processing:boolean=true;
  constructor(private apiFireBaseUse:ApiFireBaseService,public snackBar: MatSnackBar,public dialog: MatDialog) { }
  @Output() EnviarPlavraSelecionada: EventEmitter<any> = new EventEmitter();
  public palavraEscolhida:string="";
  ngOnInit(): void {
	  this.apiFireBaseUse.pegarTodasPlavras().snapshotChanges().pipe(
        map(changes =>
          changes.map(c =>
            ({ key: c.payload.key, ...c.payload.val() })
          )
        )
      ).subscribe(data => {
        this.todasPalavrasDoFirebase=this.pegarTodasPlavrasSugeridas(data);
        this.Processing=false;
      });
  }

  public pegarTodasPlavrasSugeridas(ValoresDeBusca:any)
  {
    this.todasPalavrasDoFirebase=ValoresDeBusca;
    let NovoValor= this.todasPalavrasDoFirebase.filter(function(item){
      if(item.check==false)return  item;  //retorna o item original elevado ao quadrado
      else return '' ;
      });

      return NovoValor;
  }

  enviarPalavra(PlavraParaEnviar:Palavra)
  { 
    this.palavraEscolhida=PlavraParaEnviar.portuguese;
     this.EnviarPlavraSelecionada.emit(PlavraParaEnviar);
  }

  aprovarPlavra(Plavra:Palavra)
  {
     Plavra.check=true;
     this.apiFireBaseUse.AtualziarPlavra(Plavra.key,Plavra).then(result=>{
      this.apiFireBaseUse.mostrarResultado("Atualizada","Palavra Atualizada com sucesso")
    }).catch(error=>{
      this.apiFireBaseUse.mostrarResultado("Erro","Não foi possivel Atualizar!")
    })

  }

  regeitarPalavra(Plavra:Palavra)
  {
      this.apiFireBaseUse.EliminarPlavra(Plavra.key).then(result=>{
        this.apiFireBaseUse.mostrarResultado("Salvo","Palavra Eliminada com sucesso")
    }).catch(error=>{
      this.apiFireBaseUse.mostrarResultado("Erro","Não foi possivel eliminar!")
    })
  }

  editarPlavra(Plavra:Palavra)
  {
    
    this.apiFireBaseUse.ArmazenarPlavra(Plavra);
    let Palav:PalavraExtra = new PalavraExtra();
    Palav.linguagem="Portugues";
    Palav.palavraParaExibir=Plavra.portuguese;
    this.apiFireBaseUse.ArmazenarPlavraExtra(Palav);
    this.dialog.open(EditarPlavraComponent,{
      width: '480px'
    });

  }

  ngOnChanges(){
    console.log("Houve alteracao")
  }

 

  

}
