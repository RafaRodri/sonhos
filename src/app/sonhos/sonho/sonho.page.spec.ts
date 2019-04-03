import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SonhoPage } from './sonho.page';

describe('SonhoPage', () => {
  let component: SonhoPage;
  let fixture: ComponentFixture<SonhoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SonhoPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SonhoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
