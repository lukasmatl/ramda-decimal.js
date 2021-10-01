import Decimal from 'decimal.js';
import {curry} from 'ramda';


export const equals = curry((x: Decimal, y: Decimal): boolean => x.equals(y));
