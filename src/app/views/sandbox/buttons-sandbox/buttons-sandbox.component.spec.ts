import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonsSandboxComponent } from './buttons-sandbox.component';

describe('ButtonsSandboxComponent', () => {
  let component: ButtonsSandboxComponent;
  let fixture: ComponentFixture<ButtonsSandboxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ButtonsSandboxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ButtonsSandboxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
