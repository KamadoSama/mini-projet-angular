import { TestBed } from '@angular/core/testing';
import { CanDeactivateFn } from '@angular/router';

import { residenceEditGuard } from './residence-edit.guard';

describe('residenceEditGuard', () => {
  const executeGuard: CanDeactivateFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => residenceEditGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
