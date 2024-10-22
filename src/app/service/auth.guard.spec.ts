import { TestBed } from '@angular/core/testing';
import { Router } from '@angular/router';

import { LoginService } from './login.service';
import { of } from 'rxjs';

describe('authGuard', () => {
  let loginService: jasmine.SpyObj<LoginService>;
  let router: jasmine.SpyObj<Router>;
   

  beforeEach(() => {
    const loginServiceSpy = jasmine.createSpyObj('LoginService', ['isLoggedIn']);
    const routerSpy = jasmine.createSpyObj('Router', ['navigate']);

    TestBed.configureTestingModule({
      providers: [
        { provide: LoginService, useValue: loginServiceSpy },
        { provide: Router, useValue: routerSpy }
      ]
    });

    loginService = TestBed.inject(LoginService) as jasmine.SpyObj<LoginService>;
    router = TestBed.inject(Router) as jasmine.SpyObj<Router>;
     
  });

  it('should allow the activation if user is logged in', () => {
    loginService.isLoggedIn.and.returnValue(true);

     
 
  });

  it('should prevent activation and navigate to login if user is not logged in', () => {
    loginService.isLoggedIn.and.returnValue(false);

     

   
    expect(router.navigate).toHaveBeenCalledWith(['login']);
  });
});
