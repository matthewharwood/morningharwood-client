import { NgModule } from '@angular/core';
import { AdminWorkComponent } from './work.component';
import { EndpointModule } from '../../api/endpoint.module';
import { EndPointService } from '../../api/endpoint.service';
import { MdListModule } from '@angular/material';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { MdButtonModule } from '@angular/material';
import { WorkDetailModule } from './+detail/work-detail.module';
import { routing } from './work.route';

@NgModule({
  imports: [
    EndpointModule,
    MdListModule,
    CommonModule,
    FormsModule,
    MdButtonModule,
    WorkDetailModule,
    routing
  ],
  providers: [ EndPointService ],
  declarations: [
    AdminWorkComponent,
  ],
})
export class AdminWorkModule {
}
