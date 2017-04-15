/**
 * Created by matth on 2/26/2017.
 */


export type PartsOfDay =
  "Morning"
  | "Evening"
  | "Afternoon"

const isMorning = (h) => (h >= 6 && h <= 11);
const isAfterNoon = (h) => (h >= 12 && h <= 16);
const isEvening = (h) => (h >= 17 || h <= 5);

export function getPartOfDay(date: Date): (PartsOfDay) {
  const hours = date.getHours();

  if (isEvening(hours)) {
    return "Evening";
  } else if (isMorning(hours)) {
    return "Morning";
  } else if (isAfterNoon(hours)) {
    return "Afternoon"
  }
}
