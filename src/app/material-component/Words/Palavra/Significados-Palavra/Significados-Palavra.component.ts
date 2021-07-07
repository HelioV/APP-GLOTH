import { EditarPlavraComponent } from './../EditarPlavra/EditarPlavra.component';
import { Component, OnInit } from '@angular/core';
import { MatDialog} from '@angular/material/dialog';
@Component({
  selector: 'app-Significados-Palavra',
  templateUrl: './Significados-Palavra.component.html',
  styleUrls: ['./Significados-Palavra.component.css']
})
export class SignificadosPalavraComponent implements OnInit {
  linguagem:String="Kikongo"
  typesOfShoes: string[] = ['Boots', 'Clogs', 'Loafers', 'Moccasins', 'Sneakers','Hélio Vicente','Home',
  'Boots'];
  constructor(public dialog: MatDialog) { }

  ngOnInit() {
  }

  openDialog(){
    this.dialog.open(EditarPlavraComponent);
  }

}
