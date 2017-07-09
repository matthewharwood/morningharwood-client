/**
 * Created by matth on 7/8/2017.
 */
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { EndPointService } from './endpoint.service';

@NgModule({
  imports: [
    HttpModule,
  ],
  providers: [
    EndPointService,
  ],
})
export class EndpointModule {
}
