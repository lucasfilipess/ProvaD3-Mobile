import { Pessoa } from './../models/pessoa.model';
import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';

@Injectable({
  providedIn: 'root',
})
export class PessoaServiceService {
  pessoa: Pessoa[] = [];
  constructor(private storage: Storage) {}

  insertPessoa(key: string, pessoa: Pessoa) {
    return this.storage.set(key, pessoa);
  }
  getPessoa(racaCor: string) {
    return this.storage.get(racaCor);
  }
  getPessoaId(id) {
    return this.storage.get(id);
    console.log(id);
  }
}
