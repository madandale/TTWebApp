import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TopdonorComponent } from './topdonor.component';

describe('TopdonorComponent', () => {
  let component: TopdonorComponent;
  let fixture: ComponentFixture<TopdonorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TopdonorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TopdonorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
