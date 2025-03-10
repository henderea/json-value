import { orderBy } from 'natural-orderby';

export function natSort(list) {
  return orderBy(list, [(v) => v.replace(/[_-]/g, ' '), (v) => v]);
}
