import Decimal from 'decimal.js';
import { curry } from 'ramda';

export const pow = curry((x: Decimal.Value, y: Decimal.Value): Decimal  => Decimal.pow(x,y));
