import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-coefficient',
  templateUrl: './coefficient.component.html',
  styleUrls: ['./coefficient.component.css'],
})
export class CoefficientComponent {
  @Input() coefficient = 2;
}
