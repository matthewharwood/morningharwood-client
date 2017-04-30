/**
 * Created by matty on 4/29/17.
 */


interface IPathValues {
  FULL: string
}

const PathValues: IPathValues = {
  FULL: 'full',
};

type PathValues = (typeof PathValues)[keyof typeof PathValues];


export function getPathValues(): IPathValues {
  return PathValues;
}