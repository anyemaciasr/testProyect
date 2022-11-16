import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestburnoutComponent } from './testburnout.component';

describe('TestburnoutComponent', () => {
  let component: TestburnoutComponent;
  let fixture: ComponentFixture<TestburnoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestburnoutComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TestburnoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
