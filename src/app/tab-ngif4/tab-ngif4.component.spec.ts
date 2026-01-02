import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TabNgif4Component } from './tab-ngif4.component';

describe('TabNgif4Component', () => {
  let component: TabNgif4Component;
  let fixture: ComponentFixture<TabNgif4Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TabNgif4Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TabNgif4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
