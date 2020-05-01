
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { AuthService } from 'src/app/models/services/auth.service';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { UserAccountComponent } from './account.component';

class FakeRouter {
    navigate( params ) { }
}
  
describe('Verificación del componente UserAccount', () => {
  let component: UserAccountComponent;
  let fixture: ComponentFixture<UserAccountComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
        imports: [ HttpClientModule, FormsModule, ReactiveFormsModule ],
        declarations: [ UserAccountComponent ],
        providers: [ 
            AuthService,     
            { provide: Router, useClass: FakeRouter } 
        ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserAccountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('Redirige al login', () => {
    const router = TestBed.get(Router);
    const spy = spyOn(router, 'navigate');
    component.tryLogout();
    expect(spy).toHaveBeenCalledWith(['/login']);
    });
});

