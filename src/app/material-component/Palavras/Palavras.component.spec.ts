/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { PalavrasComponent } from './Palavras.component';

describe('PalavrasComponent', () => {
  let component: PalavrasComponent;
  let fixture: ComponentFixture<PalavrasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PalavrasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PalavrasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
