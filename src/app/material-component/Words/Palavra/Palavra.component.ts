import { Palavra } from './word.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-Palavra',
  templateUrl: './Palavra.component.html',
  styleUrls: ['./Palavra.component.css']
})
export class PalavraComponent implements OnInit {

  public loadword:boolean=false;
  public PalavraSelecionada:Palavra=new Palavra();
  constructor() { }
 
  ngOnInit() {
  }
  enviouUmaPlavra(Palavr:Palavra)
  {
    this.PalavraSelecionada=Palavr;
    this.loadword=true;
  }

}
