import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomePermisosComponent } from './home-permisos.component';

describe('HomePermisosComponent', () => {
  let component: HomePermisosComponent;
  let fixture: ComponentFixture<HomePermisosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomePermisosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomePermisosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
