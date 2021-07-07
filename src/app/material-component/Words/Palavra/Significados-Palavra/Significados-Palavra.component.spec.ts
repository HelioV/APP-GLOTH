/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { SignificadosPalavraComponent } from './Significados-Palavra.component';

describe('SignificadosPalavraComponent', () => {
  let component: SignificadosPalavraComponent;
  let fixture: ComponentFixture<SignificadosPalavraComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SignificadosPalavraComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SignificadosPalavraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
