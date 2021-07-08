import { Injectable } from '@angular/core';
import {Palavra,PalavraExtra,PalavraParaArmazenar} from './material-component/Words/Palavra/word.model';
import { AngularFirestore } from '@angular/fire/firestore';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/database';
import { HttpClient} from '@angular/common/http';
import { MatSnackBar} from '@angular/material/snack-bar';
@Injectable({
  providedIn: 'root'
})
export class ApiFireBaseService {
  
private PalavraParaArmazenar:Palavra=new Palavra();
private PalavraExtraParaArmazenar:PalavraExtra=new PalavraExtra();
private dbPath = '/dicionario';
public tutorialsRef: AngularFireList<Palavra|PalavraParaArmazenar>;
constructor(private httpClient: HttpClient,private fireStore: AngularFirestore,private db: AngularFireDatabase,public snackBar: MatSnackBar) {
  this.tutorialsRef = this.db.list(this.dbPath);

 }

 pegarTodasPlavras(): AngularFireList<Palavra|PalavraParaArmazenar> {
  return this.tutorialsRef;
}

 CadastrarUmaPlavra(palavra: PalavraParaArmazenar): any {
  return this.tutorialsRef.push(palavra);
}

CadastrarPalavra(palarv:PalavraParaArmazenar):any{
  return this.tutorialsRef.push(palarv);
}

AtualziarPlavra(key: string, value: Palavra): Promise<void> {
  return this.tutorialsRef.update(key, value);
}

EliminarPlavra(key: string): Promise<void> {
  return this.tutorialsRef.remove(key);
}

/*EliminarTodasPalavras(): Promise<void> {
  return this.tutorialsRef.remove();
}*/

mostrarResultado(message: string, action: string) {
  this.snackBar.open(message, action, {
    duration: 1000,
  });
}

public pegarPlavraArmazenada()
{
  return this.PalavraParaArmazenar;
}

public pegarPlavraExtraArmazenada()
{
  return this.PalavraExtraParaArmazenar;
}

public ArmazenarPlavra(Plavra:Palavra)
{
   this.PalavraParaArmazenar=Plavra;
}

public ArmazenarPlavraExtra(Plavra:PalavraExtra)
{
   this.PalavraExtraParaArmazenar=Plavra;
}
   
}
