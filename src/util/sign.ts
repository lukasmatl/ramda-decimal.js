import Decimal from 'decimal.js';
import {applyDecimalFunction} from './applyDecimalFunction';


export const sign = (n: Decimal.Value | Array<Decimal.Value>): Decimal | Array<Decimal> => applyDecimalFunction(n, Decimal.sign);
