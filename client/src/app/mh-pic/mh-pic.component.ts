import { Component, Input } from '@angular/core';
import { environment as env } from '../../environments/environment';


// NOTES:
// https://internetingishard.com/html-and-css/responsive-images/
@Component({
  selector: 'mh-pic',
  templateUrl: './mh-pic.component.html',
  styleUrls: ['./mh-pic.component.css']
})
export class MhPicComponent {
  public rootSrc: any;

  @Input('src') srcLink:string = 'https://placebear.com/g/1920/1080';
  @Input('alt') altText:string = 'alt text default';
  @Input('ext') extType:string = 'jpg';
  constructor() {
    this.rootSrc = env.imgSrc;
  }
}
