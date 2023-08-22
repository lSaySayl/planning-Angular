import { Component, EventEmitter,Output } from '@angular/core';

@Component({
  selector: 'app-game-invite-modal',
  templateUrl: './game-invite-modal.component.html',
  styleUrls: ['./game-invite-modal.component.scss']
})
export class GameInviteModalComponent {
  @Output() closeModalEvent = new EventEmitter<void>();

  closeModalGame() {
    this.closeModalEvent.emit();
  }

}
