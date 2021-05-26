import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoPlaceComponent } from './info-place.component';

describe('InfoPlaceComponent', () => {
  let component: InfoPlaceComponent;
  let fixture: ComponentFixture<InfoPlaceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InfoPlaceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InfoPlaceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
