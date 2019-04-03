import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SonhosPage } from './sonhos.page';

describe('SonhosPage', () => {
  let component: SonhosPage;
  let fixture: ComponentFixture<SonhosPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [SonhosPage],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SonhosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
