import Decimal from 'decimal.js';
import {slice, compose, map} from 'ramda'
import {checkAndInstantiateDecimal} from "../util";

/**
 * Funtion that finds the lowest number of the last values of array defined by param length
 * @param length
 * @param array
 */
export const lowest = (length: number, array: Decimal.Value[]): Decimal | null => {
    if (array.length < length || !length) return null;

    const subArray = compose(
        map(checkAndInstantiateDecimal),
        slice(array.length-1-length, array.length-1)
    )(array);

    return Decimal.min(subArray);
};
