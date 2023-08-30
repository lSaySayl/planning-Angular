import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GameInviteModalComponent } from './game-invite-modal.component';

describe('GameInviteModalComponent', () => {
  let component: GameInviteModalComponent;
  let fixture: ComponentFixture<GameInviteModalComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GameInviteModalComponent]
    });
    fixture = TestBed.createComponent(GameInviteModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
