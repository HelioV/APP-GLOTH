/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { PalavraNaoAprovadaComponent } from './PalavraNaoAprovada.component';

describe('PalavraNaoAprovadaComponent', () => {
  let component: PalavraNaoAprovadaComponent;
  let fixture: ComponentFixture<PalavraNaoAprovadaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PalavraNaoAprovadaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PalavraNaoAprovadaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
