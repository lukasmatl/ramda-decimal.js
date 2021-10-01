import Decimal from 'decimal.js';
import { curry } from 'ramda';

export const add = curry((x: Decimal.Value, y: Decimal.Value): Decimal  => Decimal.add(x,y));
