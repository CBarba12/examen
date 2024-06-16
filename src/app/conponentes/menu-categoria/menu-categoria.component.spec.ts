import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuCategoriaComponent } from './menu-categoria.component';

describe('MenuCategoriaComponent', () => {
  let component: MenuCategoriaComponent;
  let fixture: ComponentFixture<MenuCategoriaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MenuCategoriaComponent]
    });
    fixture = TestBed.createComponent(MenuCategoriaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});