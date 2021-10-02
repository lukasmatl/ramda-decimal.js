import Decimal from 'decimal.js';
import {applyDecimalFunction} from "../util";

export const log2 = (n: Decimal.Value | Decimal.Value[]): Decimal | Decimal[] => applyDecimalFunction(n, Decimal.log2);
