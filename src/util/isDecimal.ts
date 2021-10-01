import Decimal from 'decimal.js';
import {applyDecimalFunction} from "./applyDecimalFunction";


export const isDecimal = (n: Decimal.Value | Array<Decimal.Value>): boolean | Array<boolean> => applyDecimalFunction(n, Decimal.isDecimal);
