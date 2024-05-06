import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistrarseVerificacionComponent } from './registrarse-verificacion.component';

describe('RegistrarseVerificacionComponent', () => {
  let component: RegistrarseVerificacionComponent;
  let fixture: ComponentFixture<RegistrarseVerificacionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RegistrarseVerificacionComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RegistrarseVerificacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
