import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';

import { residenceDetailGuard } from './residence-detail.guard';

describe('residenceDetailGuard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => residenceDetailGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
