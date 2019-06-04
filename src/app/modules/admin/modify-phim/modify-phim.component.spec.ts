import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifyPhimComponent } from './modify-phim.component';

describe('ModifyPhimComponent', () => {
  let component: ModifyPhimComponent;
  let fixture: ComponentFixture<ModifyPhimComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModifyPhimComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModifyPhimComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
