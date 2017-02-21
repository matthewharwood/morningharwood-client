import { Component, OnInit, Input } from '@angular/core';
import { WorkPost } from "../+work/work.content";

@Component({
  selector: 'app-article-header',
  templateUrl: './article-header.component.html',
  styleUrls: ['./article-header.component.scss']
})
export class ArticleHeaderComponent implements OnInit {
  @Input() post: WorkPost;
  constructor() { }

  ngOnInit() {}
}
