import Decimal from 'decimal.js';
import {applyDecimalFunction} from "../util";

export const abs = (n: Decimal.Value | Decimal.Value[]): Decimal | Decimal[] => applyDecimalFunction(n, Decimal.abs);
