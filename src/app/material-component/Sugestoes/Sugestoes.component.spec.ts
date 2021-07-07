/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { SugestoesComponent } from './Sugestoes.component';

describe('SugestoesComponent', () => {
  let component: SugestoesComponent;
  let fixture: ComponentFixture<SugestoesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SugestoesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SugestoesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
