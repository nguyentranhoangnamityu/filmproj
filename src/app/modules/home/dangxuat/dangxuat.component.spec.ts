import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DangxuatComponent } from './dangxuat.component';

describe('DangxuatComponent', () => {
  let component: DangxuatComponent;
  let fixture: ComponentFixture<DangxuatComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DangxuatComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DangxuatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
