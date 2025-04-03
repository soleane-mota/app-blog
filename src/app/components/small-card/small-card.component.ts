import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-small-card',
  imports: [RouterLink],
  templateUrl: './small-card.component.html',
  styleUrl: './small-card.component.css'
})
export class SmallCardComponent {
  @Input()
  id: string = '0';
  @Input()
  imageCover: string = '';
  @Input()
  imageSource: string = '';
  @Input()
  imageAlt: string = '';
  @Input()
  cardTitle: string = '';
}
