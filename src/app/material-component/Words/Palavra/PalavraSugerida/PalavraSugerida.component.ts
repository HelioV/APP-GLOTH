import { Palavra } from './../word.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-PalavraSugerida',
  templateUrl: './PalavraSugerida.component.html',
  styleUrls: ['./PalavraSugerida.component.css']
})
export class PalavraSugeridaComponent implements OnInit {

  
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

  
  ngOnChanges(){
    
  }
 
}
