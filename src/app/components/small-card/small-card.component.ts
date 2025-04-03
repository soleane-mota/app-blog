import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-small-card',
  imports: [],
  templateUrl: './small-card.component.html',
  styleUrl: './small-card.component.css'
})
export class SmallCardComponent {
  @Input()
  imageCover: string = '';
  @Input()
  imageSource: string = '';
  @Input()
  imageAlt: string = '';
  @Input()
  cardTitle: string = '';
}
