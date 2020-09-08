import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VakuesComponent } from './vakues.component';

describe('VakuesComponent', () => {
  let component: VakuesComponent;
  let fixture: ComponentFixture<VakuesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VakuesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VakuesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
