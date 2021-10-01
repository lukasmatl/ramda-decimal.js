import Decimal from 'decimal.js';
import { curry } from 'ramda';

export const sub = curry((x: Decimal.Value, y: Decimal.Value): Decimal  => Decimal.sub(x,y));
