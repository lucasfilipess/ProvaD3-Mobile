import { Component, OnInit } from '@angular/core';
import { Pessoa } from '../models/Pessoa.model';
import { PessoaServiceService } from '../service/pessoa.service';

@Component({
  selector: 'app-meus-dados',
  templateUrl: './meus-dados.page.html',
  styleUrls: ['./meus-dados.page.scss'],
})
export class MeusDadosPage implements OnInit {
  pessoa: Pessoa[] = [];
  constructor(private pessoaService: PessoaServiceService) {}

  ngOnInit() {}
}
