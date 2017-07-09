/**
 * Created by matth on 7/9/2017.
 */
import { NgModule } from '@angular/core';
import { CanActivateViaAuthGuard } from './auth.service';

@NgModule({
  imports: [],
  providers: [CanActivateViaAuthGuard]
})
export class AuthModule{}
