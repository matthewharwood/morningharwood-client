/**
 * Created by matth on 2/23/2017.
 */
import { Action } from '@ngrx/store';

export const INCREMENT = 'INCREMENT';
export const DECREMENT = 'DECREMENT';


export function counterReducer(state: boolean = false, action: Action) {
  switch (action.type) {
    case INCREMENT:
      return true;

    case DECREMENT:
      return false;

    default:
      return state;
  }
}
