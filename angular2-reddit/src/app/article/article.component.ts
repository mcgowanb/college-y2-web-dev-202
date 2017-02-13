import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css'],
  host: {
    class : 'row'
  }
})
export class ArticleComponent implements OnInit {
  votes: number;
  title: string;
  link: string;

  constructor() {
    this.votes = 10;
    this.title = "Angular 2";
    this.link = "https://angular.io"
  }

  voteUp(){
    this.votes++;
  }

  voteDown(){
    this.votes--;
  }

  ngOnInit() {
  }

}
