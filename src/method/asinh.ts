import Decimal from 'decimal.js';
import {applyDecimalFunction} from "../util";

export const asinh = (n: Decimal.Value | Decimal.Value[]): Decimal | Decimal[] => applyDecimalFunction(n, Decimal.asinh);
