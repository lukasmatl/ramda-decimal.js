import Decimal from 'decimal.js';
import {applyDecimalFunction} from './applyDecimalFunction';


export const sign = (n: Decimal.Value | Decimal.Value[]): Decimal | Decimal[] => applyDecimalFunction(n, Decimal.sign);
