import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-EliminarPlavra',
  templateUrl: './EliminarPlavra.component.html',
  styleUrls: ['./EliminarPlavra.component.css']
})
export class EliminarPlavraComponent implements OnInit {

  public smsresult:String="";
  public word:String="";
  public Processing:boolean=false;
  constructor() { }

  ngOnInit() {
  }

  EliminarPlavra()
  {

  }

}
