import { Component, AfterViewInit } from '@angular/core';
import { ApiFireBaseService } from './../apiFireBase.service';
import { Router } from '@angular/router';
@Component({
	selector: 'app-dashboard',
	templateUrl: './dashboard.component.html',
	styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements AfterViewInit {
    constructor(private router: Router,private apiFireBaseUse:ApiFireBaseService) { }
	ngAfterViewInit() { }
  ngOnInit() {
    if(this.apiFireBaseUse.nomeUsuario=="")this.router.navigate(['/Login']);
  }

}
