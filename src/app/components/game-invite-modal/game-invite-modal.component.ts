import { Component, EventEmitter,Output } from '@angular/core';

@Component({
  selector: 'app-game-invite-modal',
  templateUrl: './game-invite-modal.component.html',
  styleUrls: ['./game-invite-modal.component.scss']
})
export class GameInviteModalComponent {
  @Output() closeModalEvent = new EventEmitter<void>();
  value: string = `http://localhost:4200/${this.generateRandomPart()}`;

  generateRandomPart(): string {
    const characters = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    let randomPart = '';

    for (let i = 0; i < 8; i++) {
      const index = Math.floor(Math.random() * characters.length);
      randomPart += characters.charAt(index);
    }

    return randomPart;
  }

  closeModalGame() {
    this.closeModalEvent.emit();
  }

}
