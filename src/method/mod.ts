import Decimal from 'decimal.js';
import { curry } from 'ramda';

export const mod = curry((x: Decimal.Value, y: Decimal.Value): Decimal  => Decimal.mod(x,y));
