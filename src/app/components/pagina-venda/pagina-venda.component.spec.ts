import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaginaVendaComponent } from './pagina-venda.component';

describe('PaginaVendaComponent', () => {
  let component: PaginaVendaComponent;
  let fixture: ComponentFixture<PaginaVendaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PaginaVendaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PaginaVendaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
