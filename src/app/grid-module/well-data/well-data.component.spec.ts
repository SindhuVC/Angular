import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WellDataComponent } from './well-data.component';

describe('WellDataComponent', () => {
  let component: WellDataComponent;
  let fixture: ComponentFixture<WellDataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WellDataComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WellDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
