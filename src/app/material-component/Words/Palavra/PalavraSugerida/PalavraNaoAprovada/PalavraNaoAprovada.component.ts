import { Component, OnInit } from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';

export interface PeriodicElement {
  name: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {name: 'Comer'},
  {name: 'Banhar'},
  {name: 'Festejar'},
  {name: 'Correr'},
  {name: 'Progrmar'},
  { name: 'Caminhar'},
];

@Component({
  selector: 'app-PalavraNaoAprovada',
  templateUrl: './PalavraNaoAprovada.component.html',
  styleUrls: ['./PalavraNaoAprovada.component.css']
})


export class PalavraNaoAprovadaComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  displayedColumns: string[] = ['name'];
  dataSource = new MatTableDataSource(ELEMENT_DATA);

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

}
