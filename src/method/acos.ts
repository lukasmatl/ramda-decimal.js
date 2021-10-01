import Decimal from 'decimal.js';
import {applyDecimalFunction} from "../util";


export const acos = (n: Decimal.Value | Array<Decimal.Value>): Decimal | Array<Decimal> => applyDecimalFunction(n, Decimal.acos);
