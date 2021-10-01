import Decimal from 'decimal.js';
import {applyDecimalFunction} from "../util";

export const exp = (n: Decimal.Value | Array<Decimal.Value>): Decimal | Array<Decimal> => applyDecimalFunction(n, Decimal.exp);
