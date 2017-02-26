/**
 * Created by matth on 2/23/2017.
 */
import { Action } from '@ngrx/store';

export const ACTIVATE = 'ACTIVATE';
export const DEACTIVATE = 'DEACTIVATE';


export function counterReducer(state: boolean = false, action: Action) {
  switch (action.type) {
    case ACTIVATE:
      return true;

    case DEACTIVATE:
      return false;

    default:
      return state;
  }
}
