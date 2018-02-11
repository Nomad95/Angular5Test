import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NestedMainComponent } from './nested-main.component';

describe('NestedMainComponent', () => {
  let component: NestedMainComponent;
  let fixture: ComponentFixture<NestedMainComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NestedMainComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NestedMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
