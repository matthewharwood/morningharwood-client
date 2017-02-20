/**
 * Created by matth on 2/19/2017.
 */


export function bogo<T>(v:Array<T>):Array<T> {
  for(let j, x, i = v.length; i; j = Math.floor(Math.random() * i), x = v[--i], v[i] = v[j], v[j] = x);
  return v;
}
