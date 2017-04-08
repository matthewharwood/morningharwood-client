/**
 * Created by matth on 2/23/2017.
 */
import { Action } from '@ngrx/store';
import { PartsOfDay } from './date';
export const ACTIVATE = 'ACTIVATE';
export const DEACTIVATE = 'DEACTIVATE';


export function sunDialReducer(state: number = 0, action: Action) {
  switch (action.type) {
    case PartsOfDay[PartsOfDay.MORNING]:
      return PartsOfDay.MORNING;

    case PartsOfDay[PartsOfDay.AFTERNOON]:
      return PartsOfDay.AFTERNOON;

    case PartsOfDay[PartsOfDay.EVENING]:
      return PartsOfDay.EVENING;

    default:
      return state;
  }
}
