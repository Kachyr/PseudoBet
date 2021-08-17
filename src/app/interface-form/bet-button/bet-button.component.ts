import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-bet-button',
  templateUrl: './bet-button.component.html',
  styleUrls: ['./bet-button.component.css'],
})
export class BetButtonComponent {
  @Input() isDisabled = false;
}
