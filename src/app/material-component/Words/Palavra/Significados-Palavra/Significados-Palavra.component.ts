import { ApiFireBaseService } from './../../../../apiFireBase.service';
import { Palavra,PalavraExtra} from './../word.model';
import { EditarPlavraComponent } from './../EditarPlavra/EditarPlavra.component';
import { Component, OnInit,Input } from '@angular/core';
import { MatDialog} from '@angular/material/dialog';
@Component({
  selector: 'app-Significados-Palavra',
  templateUrl: './Significados-Palavra.component.html',
  styleUrls: ['./Significados-Palavra.component.css']
})
export class SignificadosPalavraComponent implements OnInit {
  typesOfShoes: string[]=[];
  nome:string="";
  @Input('Palavra') palavraEnviada:Palavra=new Palavra();
  public Processing:boolean=false;
  constructor(public dialog: MatDialog,private apiFireBaseUse:ApiFireBaseService) { }
  ngOnInit() {
    this.typesOfShoes=this.palavraEnviada.kikongo.split(",");
  }

  openDialog(palavraselecionada:string){
    this.apiFireBaseUse.ArmazenarPlavra(this.palavraEnviada);
    let Palav:PalavraExtra = new PalavraExtra();
    Palav.linguagem="kikongo";
    Palav.palavraParaExibir=palavraselecionada;
    this.apiFireBaseUse.ArmazenarPlavraExtra(Palav);
    this.dialog.open(EditarPlavraComponent,{
      width: '490px'
    });
  }

  public ListaDoSignificado()
  {
        return this.palavraEnviada.DividirKikongo();
  }

  ngOnChanges(){
    this.typesOfShoes=this.palavraEnviada.kikongo.split(",");
  }

  public EliminarPalavra(PalavraAeliminar:string)
  {
    
    let palavrasKimbundo=this.palavraEnviada.kikongo.split(",");
    let index=palavrasKimbundo.indexOf(PalavraAeliminar);
    palavrasKimbundo.splice(index, 1);
    this.palavraEnviada.kikongo=palavrasKimbundo.join(',');

    this.apiFireBaseUse.AtualziarPlavra(this.palavraEnviada.key,this.palavraEnviada).then(result=>{
      this.apiFireBaseUse.mostrarResultado("Sucesso","Palavra Atualizada")
    
    }).catch(error=>{
      this.apiFireBaseUse.mostrarResultado("Erro","Não foi feito atualização")
    })
  }

  AdicionarPalavra()
  {
      this.Processing=true;
      let valores = this.palavraEnviada.kikongo.split(",");
      valores=valores.reverse();
      valores.push(this.nome);
      this.palavraEnviada.kikongo=valores.reverse().join(",");
      this.apiFireBaseUse.AtualziarPlavra(this.palavraEnviada.key,this.palavraEnviada).then(result=>{
        this.apiFireBaseUse.mostrarResultado("Sucesso","Palavra Adicionada")
        this.Processing=false;
      }).catch(error=>{
        this.apiFireBaseUse.mostrarResultado("Erro","Não foi feito atualização")
        this.Processing=false;
      }) 
  }

  


}
