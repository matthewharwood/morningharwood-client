/**
 * Created by matth on 2/26/2017.
 */

export enum PartsOfDay {
  MORNING,
  EVENING,
  AFTERNOON,
}

const isMorning = (h) => (h >= 6 && h <= 11);
const isAfterNoon = (h) => (h >= 12 && h <= 16);
const isEvening = (h) => (h >= 17 || h <= 5);

export function getPartOfDay(date: Date): (PartsOfDay) {
  const hours = date.getHours();

  if (isEvening(hours)) {
    return PartsOfDay.EVENING;
  } else if (isMorning(hours)) {
    return PartsOfDay.MORNING;
  } else if (isAfterNoon(hours)) {
    return PartsOfDay.AFTERNOON
  }
}
