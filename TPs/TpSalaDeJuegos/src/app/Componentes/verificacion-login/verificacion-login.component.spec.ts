import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VerificacionLoginComponent } from './verificacion-login.component';

describe('VerificacionLoginComponent', () => {
  let component: VerificacionLoginComponent;
  let fixture: ComponentFixture<VerificacionLoginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VerificacionLoginComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(VerificacionLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
