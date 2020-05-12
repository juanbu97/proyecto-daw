import { TestBed } from '@angular/core/testing';

import { AuthWardGuard } from './auth-ward.guard';

describe('AuthWardGuard', () => {
  let guard: AuthWardGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(AuthWardGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
