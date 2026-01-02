import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TabNgif5Component } from './tab-ngif5.component';

describe('TabNgif5Component', () => {
  let component: TabNgif5Component;
  let fixture: ComponentFixture<TabNgif5Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TabNgif5Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TabNgif5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
