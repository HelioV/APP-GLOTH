import { ApiFireBaseService } from './../../../../apiFireBase.service';
import { PalavraParaArmazenar } from './../word.model';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
 
@Component({
  selector: 'app-AdicionarPalavraCompleta',
  templateUrl: './AdicionarPalavraCompleta.component.html',
  styleUrls: ['./AdicionarPalavraCompleta.component.css']
})
export class AdicionarPalavraCompletaComponent implements OnInit {

  isLinear = false;
	firstFormGroup: FormGroup=Object.create(null);
	secondFormGroup: FormGroup=Object.create(null);

	isLinearvarient = false;
  	varientfirstFormGroup: FormGroup=Object.create(null);
   varientsecondFormGroup: FormGroup=Object.create(null);
   
   varientterceiroFormGroup: FormGroup=Object.create(null);

 	isLinearposition = false;
  	positionfirstFormGroup: FormGroup=Object.create(null);
 	positionsecondFormGroup: FormGroup=Object.create(null);


 	optionalfirstFormGroup: FormGroup=Object.create(null);
	optionalsecondFormGroup: FormGroup=Object.create(null);
	isOptional = false;

	editablefirstFormGroup: FormGroup=Object.create(null);
	editablesecondFormGroup: FormGroup=Object.create(null);
	isEditable = false;

	customizefirstFormGroup: FormGroup=Object.create(null);
	customizesecondFormGroup: FormGroup=Object.create(null);

	errorfirstFormGroup: FormGroup=Object.create(null);
	errorsecondFormGroup: FormGroup=Object.create(null);
    public Processing:boolean=false;
	constructor(private _formBuilder: FormBuilder,private apiFireBaseUse:ApiFireBaseService) {}

	ngOnInit() {
		this.firstFormGroup = this._formBuilder.group({
			firstCtrl: ['', Validators.required]
		});
		this.secondFormGroup = this._formBuilder.group({
			secondCtrl: ['', Validators.required]
		});

		// varient
		this.varientfirstFormGroup = this._formBuilder.group({
		      varientfirstCtrl: ['', Validators.required]
		});
		this.varientsecondFormGroup = this._formBuilder.group({
		      varientsecondCtrl: ['', Validators.required]
    });
    
    this.varientterceiroFormGroup = this._formBuilder.group({
      varientterceiroCtrl: ['', Validators.required]
});

		// position
		this.positionfirstFormGroup = this._formBuilder.group({
		      positionfirstCtrl: ['', Validators.required]
		});
		this.positionsecondFormGroup = this._formBuilder.group({
		      positionsecondCtrl: ['', Validators.required]
		});

		// optional
		this.optionalfirstFormGroup = this._formBuilder.group({
		      optionalfirstCtrl: ['', Validators.required]
		});
		this.optionalsecondFormGroup = this._formBuilder.group({
		      optionalsecondCtrl: ['', Validators.required]
		});

		// editable
		this.editablefirstFormGroup = this._formBuilder.group({
		      editablefirstCtrl: ['', Validators.required]
		});
		this.editablesecondFormGroup = this._formBuilder.group({
		      editablesecondCtrl: ['', Validators.required]
		});

		// customize
		this.customizefirstFormGroup = this._formBuilder.group({
		      customizefirstCtrl: ['', Validators.required]
		});
		this.customizesecondFormGroup = this._formBuilder.group({
		      customizesecondCtrl: ['', Validators.required]
		});

		// error
		this.errorfirstFormGroup = this._formBuilder.group({
		      errorfirstCtrl: ['', Validators.required]
		});
		this.errorsecondFormGroup = this._formBuilder.group({
		      errorsecondCtrl: ['', Validators.required]
		});
  }
  
  SalvarDados()
  {    
	    this.Processing=true;
	    let palavra:PalavraParaArmazenar=new PalavraParaArmazenar();
		 palavra.check=true;
		 palavra.portuguese=this.varientfirstFormGroup.value.varientfirstCtrl
		 palavra.kibundo=this.varientsecondFormGroup.value.varientsecondCtrl
		 palavra.kikongo=this.varientterceiroFormGroup.value.varientterceiroCtrl
		this.apiFireBaseUse.CadastrarUmaPlavra(palavra)
		this.Processing=false;
		
  }

}
