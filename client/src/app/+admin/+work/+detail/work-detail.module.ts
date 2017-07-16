/**
 * Created by matth on 7/10/2017.
 */


import { NgModule } from '@angular/core';
import { AdminWorkDetailComponent } from './work-detail.component';
import { routing } from './work-detail.route';


@NgModule({
  imports:[routing],
  providers:[],
  declarations:[AdminWorkDetailComponent],
})
export class WorkDetailModule{}
