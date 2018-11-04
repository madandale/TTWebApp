import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Readmorecomponent } from './readmore.component';

describe('ReadmoreComponent', () => {
  let component: Readmorecomponent;
  let fixture: ComponentFixture<Readmorecomponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Readmorecomponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Readmorecomponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
