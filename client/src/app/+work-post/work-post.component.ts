/**
 * Created by matth on 2/24/2017.
 */
import { Component, ChangeDetectionStrategy, Input, OnInit } from '@angular/core';
import { SunDial } from '../app.interface';
import { Observable } from 'rxjs';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'work-post',
  templateUrl: 'work-post.component.html',
  styleUrls: ['work-post.component.scss'],
})
export class WorkPostComponent implements OnInit{
  @Input('store') partOfDay: Observable<SunDial>;
  public obs$;
  constructor(private route: ActivatedRoute){}

  ngOnInit(){
    this.route.snapshot.data.remote.subscribe(x => {
      this.obs$ = x[0];
    });
  }

}

