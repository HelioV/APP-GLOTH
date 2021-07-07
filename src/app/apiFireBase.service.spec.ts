/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { ApiFireBaseService } from './apiFireBase.service';

describe('Service: ApiFireBase', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ApiFireBaseService]
    });
  });

  it('should ...', inject([ApiFireBaseService], (service: ApiFireBaseService) => {
    expect(service).toBeTruthy();
  }));
});
