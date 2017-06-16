import { Component, OnInit, Input, ViewEncapsulation } from '@angular/core';


export interface WorkPost {
  id: number,
  title: string,
  categories: Array<string>,
  paragraph: string,
  slug: string,
  overview?: Array<any>,
}

@Component({
  selector: 'app-article-header',
  templateUrl: './article-header.component.html',
  styleUrls: ['./article-header.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class ArticleHeaderComponent implements OnInit {
  @Input() post: WorkPost;
  constructor() { }

  ngOnInit() {}
}
