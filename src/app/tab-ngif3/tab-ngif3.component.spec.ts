import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TabNgif3Component } from './tab-ngif3.component';

describe('TabNgif3Component', () => {
  let component: TabNgif3Component;
  let fixture: ComponentFixture<TabNgif3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TabNgif3Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TabNgif3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
