import Decimal from 'decimal.js';
import { curry } from 'ramda';

export const log = curry((x: Decimal.Value, y: Decimal.Value): Decimal  => Decimal.log(x,y));
