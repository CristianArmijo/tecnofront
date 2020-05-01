import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserLoginComponent } from './login.component';
import { AuthService } from 'src/app/models/services/auth.service';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';

class FakeRouter {
  navigate( params ) { }
}

describe('Verificación del componente UserLogin', () => {
  let component: UserLoginComponent;
  let fixture: ComponentFixture<UserLoginComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
        imports: [ HttpClientModule, FormsModule, ReactiveFormsModule ],
        declarations: [ UserLoginComponent ],
        providers: [ 
          AuthService,     
          { provide: Router, useClass: FakeRouter }  
        ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('Creación e inicialización del componente', () => {
    expect(component).toBeTruthy();
    expect(component.user.id).toEqual(0);
    expect(component.user.email).toEqual("");
    expect(component.user.password).toEqual("");
  });
  
});

