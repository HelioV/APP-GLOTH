/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { SignificadoKimbundoComponent } from './Significado-Kimbundo.component';

describe('SignificadoKimbundoComponent', () => {
  let component: SignificadoKimbundoComponent;
  let fixture: ComponentFixture<SignificadoKimbundoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SignificadoKimbundoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SignificadoKimbundoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
