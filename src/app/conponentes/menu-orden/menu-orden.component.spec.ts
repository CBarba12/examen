import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuOrdenComponent } from './menu-orden.component';

describe('MenuOrdenComponent', () => {
  let component: MenuOrdenComponent;
  let fixture: ComponentFixture<MenuOrdenComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MenuOrdenComponent]
    });
    fixture = TestBed.createComponent(MenuOrdenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
