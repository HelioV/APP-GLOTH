/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { PalavraSugeridaComponent } from './PalavraSugerida.component';

describe('PalavraSugeridaComponent', () => {
  let component: PalavraSugeridaComponent;
  let fixture: ComponentFixture<PalavraSugeridaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PalavraSugeridaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PalavraSugeridaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
