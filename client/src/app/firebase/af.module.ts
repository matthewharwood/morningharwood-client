/**
 * Created by matth on 4/19/2017.
 */


import { NgModule } from "@angular/core";
import { AngularFireModule } from 'angularfire2';
import { firebaseConfig } from "./config";

@NgModule(
  {
    imports: [
      AngularFireModule.initializeApp(firebaseConfig),
    ],
    providers: [],
    declarations: [],
    exports: [],
  }
)
export class AngularFireClientModule {

}
