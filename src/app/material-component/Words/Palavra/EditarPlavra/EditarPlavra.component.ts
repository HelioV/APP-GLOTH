import { Component, OnInit } from '@angular/core';
import { MatSnackBar} from '@angular/material/snack-bar';
@Component({
  selector: 'app-EditarPlavra',
  templateUrl: './EditarPlavra.component.html',
  styleUrls: ['./EditarPlavra.component.css']
})
export class EditarPlavraComponent implements OnInit {

  public name:String=""
   public smsresult:String="";
   public word:String="";
   public Processing:boolean=false;
  constructor(public snackBar: MatSnackBar) { }

  ngOnInit() {
  }

  openSnackBar(message: string, action: string) {
    this.snackBar.open(message, action, {
      duration: 1000,
    });
  }
  
  SalvarPlavra()
  {
    this.openSnackBar("Salvo!","Nome salvo Com Sucesso")
  }

}
