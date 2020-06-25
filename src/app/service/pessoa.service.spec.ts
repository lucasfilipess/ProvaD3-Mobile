import { TestBed } from '@angular/core/testing';

import { PessoaServiceService } from './pessoa.service';

describe('PessoaService', () => {
  let service: PessoaServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PessoaServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
