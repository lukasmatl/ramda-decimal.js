import Decimal from 'decimal.js';
import {applyDecimalFunction} from "../util";

export const acosh = (n: Decimal.Value | Decimal.Value[]): Decimal | Decimal[] => applyDecimalFunction(n, Decimal.acosh);
