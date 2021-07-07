import { Injectable } from '@angular/core';
import {Palavra} from './material-component/Words/Palavra/word.model';
//import { AngularFirestore } from '@angular/fire/firestore';
//import { AngularFireDatabase, AngularFireList } from '@angular/fire/database';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class ApiFireBaseService {

private dbPath = '/dicionario';
//public tutorialsRef: AngularFireList<Palavra>;
constructor(){}
/*constructor(private httpClient: HttpClient,private fireStore: AngularFirestore,private db: AngularFireDatabase) {
  this.tutorialsRef = this.db.list(this.dbPath);
 }*/

 /*pegarTodasPlavras(): AngularFireList<Palavra> {
  return this.tutorialsRef;
}

CadastrarUmaPlavra(tutorial: Palavra): any {
  return this.tutorialsRef.push(tutorial);
}

AtualziarPlavra(key: string, value: any): Promise<void> {
  return this.tutorialsRef.update(key, value);
}

EliminarPlavra(key: string): Promise<void> {
  return this.tutorialsRef.remove(key);
}

EliminarTodasPalavras(): Promise<void> {
  return this.tutorialsRef.remove();
}
     */
}
