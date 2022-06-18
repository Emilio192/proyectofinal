import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RunaterraComponent } from './runaterra.component';

describe('RunaterraComponent', () => {
  let component: RunaterraComponent;
  let fixture: ComponentFixture<RunaterraComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RunaterraComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RunaterraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
