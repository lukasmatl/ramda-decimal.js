import Decimal from 'decimal.js';
import {applyDecimalFunction} from "../util";

export const sqrt = (n: Decimal.Value | Decimal.Value[]): Decimal | Decimal[] => applyDecimalFunction(n, Decimal.sqrt);
