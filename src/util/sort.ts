import Decimal from 'decimal.js';
import { compare } from './compare';
import {applyDecimalFunction} from './applyDecimalFunction';
import {checkAndInstantiateDecimal} from './checkAndInstantiateDecimal';

/**
 * Function to sort decimal number arrays
 * @param array
 */
export const  sort = (array: Decimal.Value[]): Decimal.Value[] => {
    const sortedArray: Decimal.Value[] = array.sort(compare);
    return applyDecimalFunction(sortedArray, checkAndInstantiateDecimal);
}
