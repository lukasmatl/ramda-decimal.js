import Decimal from 'decimal.js';
import {times} from 'ramda';


export const random = (x: number| undefined, count: number): Array<Decimal> => times(() => Decimal.random(x), count);
