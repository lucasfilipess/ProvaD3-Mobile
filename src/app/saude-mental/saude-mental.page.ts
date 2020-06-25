import { Component, OnInit } from '@angular/core';
import { PessoaServiceService } from '../service/pessoa.service';
import { Pessoa } from '../models/pessoa.model';

@Component({
  selector: 'app-saude-mental',
  templateUrl: './saude-mental.page.html',
  styleUrls: ['./saude-mental.page.scss'],
})
export class SaudeMentalPage implements OnInit {
  pessoa: Pessoa;
  constructor(public pessoaServiceService: PessoaServiceService) {}
  getPessoa(racaCor: string) {
    return this.pessoaServiceService.getPessoa(racaCor);
  }
  getPessoaId(id) {
    return this.pessoaServiceService.getPessoaId(id);
  }
  insertPessoa(key: string, pessoa: Pessoa) {
    return this.pessoaServiceService.insertPessoa(key, pessoa);
  }

  ngOnInit() {}
}
