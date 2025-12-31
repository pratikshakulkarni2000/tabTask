import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TabNgif2Component } from './tab-ngif2.component';

describe('TabNgif2Component', () => {
  let component: TabNgif2Component;
  let fixture: ComponentFixture<TabNgif2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TabNgif2Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TabNgif2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
