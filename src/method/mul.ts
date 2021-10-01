import Decimal from 'decimal.js';
import { curry } from 'ramda';

export const mul = curry((x: Decimal.Value, y: Decimal.Value): Decimal  => Decimal.mul(x,y));
