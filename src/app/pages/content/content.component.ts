import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { dataFake } from '../../data/dataFake';

@Component({
  selector: 'app-content',
  imports: [RouterLink],
  templateUrl: './content.component.html',
  styleUrl: './content.component.css'
})
export class ContentComponent implements OnInit {
  private id: string | null = '0';
  @Input()
  imageCover: string = '';
  @Input()
  imageSource: string = 'Desconhecido';
  @Input()
  imageAlt: string = 'imagem';
  @Input()
  contentTitle: string = '';
  @Input()
  contentDescription: string = '';

  constructor(
    private router: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.router.paramMap.subscribe(value => this.id = value.get('id'));
    this.setValueToComponent(this.id);
  }

  setValueToComponent(id: string| null): void {
    const [result] = dataFake.filter(data => data.id === id);
    
    if(result) {
      this.imageCover = result.image;
      this.imageSource = result.imageSource;
      this.contentTitle = result.title;
      this.contentDescription = result.description;
    }
  }
}
