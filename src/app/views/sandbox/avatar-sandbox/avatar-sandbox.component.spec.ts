import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AvatarSandboxComponent } from './avatar-sandbox.component';

describe('AvatarSandboxComponent', () => {
  let component: AvatarSandboxComponent;
  let fixture: ComponentFixture<AvatarSandboxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AvatarSandboxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AvatarSandboxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
