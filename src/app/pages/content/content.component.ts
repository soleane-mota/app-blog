import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-content',
  imports: [RouterLink],
  templateUrl: './content.component.html',
  styleUrl: './content.component.css'
})
export class ContentComponent {
  @Input()
  imageCover: string = 'https://img.freepik.com/vetores-gratis/paisagem-noturna-do-oceano-lua-cheia-e-estrelas-brilham_107791-7397.jpg?t=st=1743643434~exp=1743647034~hmac=012bc5e5665d27e5f0a62570981f51220961f4597badcf079d5bec2afaeafbc8&w=1380';
  @Input()
  imageSource: string = 'Freepik';
  @Input()
  imageAlt: string = 'image';
  @Input()
  contentTitle: string = 'Título do artigo';
  @Input()
  contentDescription: string = 'Descrição do artigo.';
}
