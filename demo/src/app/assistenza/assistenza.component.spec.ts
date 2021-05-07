import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AssistenzaComponent } from './assistenza.component';

describe('AssistenzaComponent', () => {
  let component: AssistenzaComponent;
  let fixture: ComponentFixture<AssistenzaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AssistenzaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AssistenzaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
