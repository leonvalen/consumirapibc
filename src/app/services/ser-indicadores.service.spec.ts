import { TestBed, inject } from '@angular/core/testing';

import { SerIndicadoresService } from './ser-indicadores.service';

describe('SerIndicadoresService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SerIndicadoresService]
    });
  });

  it('should be created', inject([SerIndicadoresService], (service: SerIndicadoresService) => {
    expect(service).toBeTruthy();
  }));
});
