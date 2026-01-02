import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TabNgfor2Component } from './tab-ngfor2.component';

describe('TabNgfor2Component', () => {
  let component: TabNgfor2Component;
  let fixture: ComponentFixture<TabNgfor2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TabNgfor2Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TabNgfor2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
