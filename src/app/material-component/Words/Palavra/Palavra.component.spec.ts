/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { PalavraComponent } from './Palavra.component';

describe('PalavraComponent', () => {
  let component: PalavraComponent;
  let fixture: ComponentFixture<PalavraComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PalavraComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PalavraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
