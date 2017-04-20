/**
 * Created by matth on 2/24/2017.
 */
import { Component, ChangeDetectionStrategy, Input } from "@angular/core";
import { SunDial } from '../app.interface';
import { Observable } from 'rxjs';

@Component({
  selector: 'work-post',
  templateUrl: 'work-post.component.html',
  styleUrls: ['work-post.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class WorkPostComponent {
  @Input('store') partOfDay: Observable<SunDial>;
}

