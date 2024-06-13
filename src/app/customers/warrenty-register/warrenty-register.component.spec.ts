import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WarrentyRegisterComponent } from './warrenty-register.component';

describe('WarrentyRegisterComponent', () => {
  let component: WarrentyRegisterComponent;
  let fixture: ComponentFixture<WarrentyRegisterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WarrentyRegisterComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WarrentyRegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
