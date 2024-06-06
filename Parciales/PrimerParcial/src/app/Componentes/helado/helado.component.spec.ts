import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeladoComponent } from './helado.component';

describe('HeladoComponent', () => {
  let component: HeladoComponent;
  let fixture: ComponentFixture<HeladoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HeladoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HeladoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
