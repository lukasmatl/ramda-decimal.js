import Decimal from 'decimal.js';
import { compare } from './compare';
import {applyDecimalFunction} from "./applyDecimalFunction";
import {checkAndInstantiateDecimal} from "./checkAndInstantiateDecimal";

export const  sort = (n: Decimal.Value[]): Decimal.Value[] => {
    const sortedArray: Decimal.Value[] = n.sort(compare);
    return applyDecimalFunction(sortedArray, checkAndInstantiateDecimal);
}
