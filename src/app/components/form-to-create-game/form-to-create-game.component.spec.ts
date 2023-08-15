import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormToCreateGameComponent } from './form-to-create-game.component';

describe('FormToCreateGameComponent', () => {
  let component: FormToCreateGameComponent;
  let fixture: ComponentFixture<FormToCreateGameComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FormToCreateGameComponent]
    });
    fixture = TestBed.createComponent(FormToCreateGameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
