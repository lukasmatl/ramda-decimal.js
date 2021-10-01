import Decimal from 'decimal.js';
import { curry } from 'ramda';

export const div = curry((x: Decimal.Value, y: Decimal.Value): Decimal  => Decimal.div(x,y));
