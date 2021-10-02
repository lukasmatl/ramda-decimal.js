import Decimal from 'decimal.js';
import {applyDecimalFunction} from "../util";

export const cos = (n: Decimal.Value | Decimal.Value[]): Decimal | Decimal[] => applyDecimalFunction(n, Decimal.cos);
