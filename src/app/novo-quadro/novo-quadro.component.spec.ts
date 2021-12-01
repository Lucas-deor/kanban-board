import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NovoQuadroComponent } from './novo-quadro.component';

describe('NovoQuadroComponent', () => {
  let component: NovoQuadroComponent;
  let fixture: ComponentFixture<NovoQuadroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NovoQuadroComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NovoQuadroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
