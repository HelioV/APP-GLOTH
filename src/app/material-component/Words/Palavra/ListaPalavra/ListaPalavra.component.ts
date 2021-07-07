import { AdicionarPalavraCompletaComponent } from './../AdicionarPalavraCompleta/AdicionarPalavraCompleta.component';
import { AdicionarPalavraComponent } from './../AdicionarPalavra/AdicionarPalavra.component';
import { Component, OnInit } from '@angular/core';
import { MatDialog} from '@angular/material/dialog';
@Component({
  selector: 'app-ListaPalavra',
  templateUrl: './ListaPalavra.component.html',
  styleUrls: ['./ListaPalavra.component.css']
})
export class ListaPalavraComponent implements OnInit {
 
  typesOfShoes: string[] = ['Boots', 'Clogs', 'Loafers', 'Moccasins', 'Sneakers','Hélio Vicente','Home',
  'Boots', 'Clogs'];
  constructor(public dialog: MatDialog ) {}
    
  ngOnInit() {
  }

  openDialog(){
    this.dialog.open(AdicionarPalavraCompletaComponent);
  }

  
}
