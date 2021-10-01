import Decimal from "decimal.js";
import {curry} from 'ramda';

export const atan2 = curry((x: Decimal.Value, y: Decimal.Value ): Decimal => Decimal.atan2(x,y));
