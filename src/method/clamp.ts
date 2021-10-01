import Decimal from "decimal.js";
import {curry} from 'ramda';

export const clamp = curry((n:Decimal.Value, min: Decimal.Value, max: Decimal.Value): Decimal => Decimal.clamp(n, min, max));
