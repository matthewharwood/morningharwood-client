/**
 * Created by matth on 2/23/2017.
 */
import {PartsOfDay, ColorFilters} from './_handies/date';

export interface AppState {
  keyboard: string;
  sunDial: SunDial;
}

export interface SunDial {
  selectedLabel: PartsOfDay
  options: Array<PartsOfDay>,
  filterClass:  Filters,
}

export type Filters =  {
  [T in ColorFilters]: boolean
}
