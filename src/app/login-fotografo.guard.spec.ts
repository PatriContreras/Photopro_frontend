import { TestBed } from '@angular/core/testing';

import { LoginFotografoGuard } from './guards/login-fotografo.guard';

describe('LoginFotografoGuard', () => {
  let guard: LoginFotografoGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(LoginFotografoGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
