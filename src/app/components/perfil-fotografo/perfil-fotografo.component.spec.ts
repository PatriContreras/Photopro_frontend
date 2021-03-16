import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PerfilFotografoComponent } from './perfil-fotografo.component';

describe('PerfilFotografoComponent', () => {
  let component: PerfilFotografoComponent;
  let fixture: ComponentFixture<PerfilFotografoComponent>;


  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PerfilFotografoComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PerfilFotografoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
