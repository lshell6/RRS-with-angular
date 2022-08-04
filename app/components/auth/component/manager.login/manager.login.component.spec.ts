import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Manager.LoginComponent } from './manager.login.component';

describe('Manager.LoginComponent', () => {
  let component: Manager.LoginComponent;
  let fixture: ComponentFixture<Manager.LoginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Manager.LoginComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Manager.LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
