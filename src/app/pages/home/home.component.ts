import { Component, OnInit } from '@angular/core';
import { MenuTitleComponent } from "../../components/menu-title/menu-title.component";
import { BigCardComponent } from "../../components/big-card/big-card.component";
import { SmallCardComponent } from '../../components/small-card/small-card.component';
import { dataFake } from '../../data/dataFake';
import { Article } from '../../../types/dataTypes';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-home',
  imports: [MenuTitleComponent, BigCardComponent, SmallCardComponent, NgFor],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {
  mainArticle: Article = {
    id: "",
    image: "",
    imageSource: "Desconhecido",
    title: "",
    description: ""
  };
  articles: Article[] = [];

  ngOnInit(): void {
    this.setValueToComponent();
  }

  setValueToComponent(): void {
    const [mainArticle, ...otherArticles] = dataFake;
    
    this.mainArticle = mainArticle;
    this.articles = otherArticles;
    console.log(this.articles[0].id);
    
}
}
