import Decimal from 'decimal.js';
import {isNil, isEmpty, slice} from 'ramda'

/**
 * Function that finds the max value within defined range in array.
 * @param fromIndex
 * @param toIndex
 * @param n
 */
export const rangeMaxValue  = (fromIndex: number, toIndex: number, array: Decimal.Value[]): Decimal | null => {
    if (isNil(array) || isEmpty(array) || isNaN(fromIndex) || isNaN(toIndex)) return null;

    const subArray: Decimal.Value[] = slice(fromIndex, toIndex, array);
    return Decimal.max(...subArray);
}
