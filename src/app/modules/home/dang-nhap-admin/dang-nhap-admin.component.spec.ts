import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DangNhapAdminComponent } from './dang-nhap-admin.component';

describe('DangNhapAdminComponent', () => {
  let component: DangNhapAdminComponent;
  let fixture: ComponentFixture<DangNhapAdminComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DangNhapAdminComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DangNhapAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
