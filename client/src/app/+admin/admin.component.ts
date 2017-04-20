/**
 * Created by matth on 4/19/2017.
 */
import { Component, ChangeDetectionStrategy } from "@angular/core";

/**
 * @ngModule AdminRouteModule
 * @whatItDoes Orchestrates all the components inside the Admin Routes component.
 * @example <admin-route></admin-route>
 */
@Component({
  selector: 'admin-route',
  templateUrl: 'admin.component.html',
  styleUrls: ['admin.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AdminComponent {

};
