import Decimal from 'decimal.js';
import {applyDecimalFunction} from "../util";

export const log2 = (n: Decimal.Value | Array<Decimal.Value>): Decimal | Array<Decimal> => applyDecimalFunction(n, Decimal.log2);
