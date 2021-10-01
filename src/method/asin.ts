import Decimal from 'decimal.js';
import {applyDecimalFunction} from "../util";

export const asin = (n: Decimal.Value | Array<Decimal.Value>): Decimal | Array<Decimal> => applyDecimalFunction(n, Decimal.asin);
