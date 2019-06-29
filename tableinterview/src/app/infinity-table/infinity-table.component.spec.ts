import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InfinityTableComponent } from './infinity-table.component';

describe('InfinityTableComponent', () => {
  let component: InfinityTableComponent;
  let fixture: ComponentFixture<InfinityTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InfinityTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InfinityTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
