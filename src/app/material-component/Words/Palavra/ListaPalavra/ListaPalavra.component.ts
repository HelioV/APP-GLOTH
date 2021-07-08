import { EditarPlavraComponent } from './../EditarPlavra/EditarPlavra.component';
import { ApiFireBaseService } from './../../../../apiFireBase.service';
import { AdicionarPalavraCompletaComponent } from './../AdicionarPalavraCompleta/AdicionarPalavraCompleta.component';
import { Component, OnInit,Output,EventEmitter } from '@angular/core';
import { MatDialog} from '@angular/material/dialog';
import { map } from 'rxjs/operators';
import {PlavraInterface,Palavra,PalavraExtra} from '../word.model';
@Component({
  selector: 'app-ListaPalavra',
  templateUrl: './ListaPalavra.component.html',
  styleUrls: ['./ListaPalavra.component.css']
})
export class ListaPalavraComponent implements OnInit {
 
  typesOfShoes: string[] = [];
  public todasPalavrasDoFirebase:PlavraInterface[]=[];
  paginaAtual:number=1;
  public Processing:boolean=true;
  @Output() EnviarPlavraSelecionada: EventEmitter<any> = new EventEmitter();
  constructor(public dialog: MatDialog,private apiFireBaseUse:ApiFireBaseService ) {
     
  }
  
  enviarPalavra(PlavraParaEnviar:Palavra)
  { 
     this.EnviarPlavraSelecionada.emit(PlavraParaEnviar);
  }

  openDialog()
  {
    this.dialog.open(AdicionarPalavraCompletaComponent);
  }

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

  public pegarTodasPlavrasSugeridas(ValoresDeBusca:any)
  {
    this.todasPalavrasDoFirebase=ValoresDeBusca;
    let NovoValor= this.todasPalavrasDoFirebase.filter(function(item){
      if(item.check==true)return  item;  //retorna o item original elevado ao quadrado
      else return '' ;
      });

      return NovoValor;
  }

  eliminarPalavra(Plavra:Palavra)
  { 
     
    this.apiFireBaseUse.EliminarPlavra(Plavra.key).then(result=>{
        this.apiFireBaseUse.mostrarResultado("Salvo","Palavra Eliminada com sucesso")
    }).catch(error=>{
      this.apiFireBaseUse.mostrarResultado("Erro","Não foi possivel eliminar!")
    })
  } 

  
}
