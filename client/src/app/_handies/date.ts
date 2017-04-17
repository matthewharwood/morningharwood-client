/**
 * Created by matth on 2/26/2017.
 */


export type PartsOfDay =
  "Morning"
  | "Afternoon"
  | "Evening"

export type ColorFilters =
  "light"
  | "sepia"
  | "dark"

/** Utility function to create a K:V from a list of strings */
function createStringEnum<T extends string>(o: Array<T>): {[K in T]: K} {
  return o.reduce((res, key) => {
    res[key] = key;
    return res;
  }, Object.create(null));
}

export const PartsOfDayEnum = createStringEnum([
  'Morning',
  'Afternoon',
  'Evening',
]);

const isMorning = (h:number):boolean  => (h >= 6 && h <= 11);
const isAfterNoon = (h:number):boolean  => (h >= 12 && h <= 16);
const isEvening = (h:number):boolean  => (h >= 17 || h <= 5);

export function getPartOfDay(date: Date): (PartsOfDay) {
  const hours = date.getHours();

  if (isEvening(hours)) {
    return PartsOfDayEnum.Evening;
  } else if (isAfterNoon(hours)) {
    return PartsOfDayEnum.Afternoon
  } else if (isMorning(hours)) {
    return PartsOfDayEnum.Morning;
  }
}
