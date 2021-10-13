import Decimal from 'decimal.js';
import {isNil, isEmpty, curry} from 'ramda'
import {checkAndInstantiateDecimal} from '../util';

/**
 * Function that finds the max index value within defined range in array.
 * It returns last or first value if there multiple values.
 * @param fromIndex
 * @param toIndex
 * @param getLast
 * @param array
 */
export const rangeMaxIndexOf  = curry((fromIndex: number, toIndex: number, getLast: boolean, array: Decimal.Value[]): number | null => {
    if (isNil(array) || isEmpty(array) || isNaN(fromIndex) || isNaN(toIndex)) return null;

    let maxIndex: number  = fromIndex;
    let maxValue: Decimal = checkAndInstantiateDecimal(array[fromIndex]);
    for (let i=fromIndex+1; i<=toIndex; i++) {
        const valueToCheck: Decimal = checkAndInstantiateDecimal(array[i]);
        if (getLast? maxValue.gte(valueToCheck): maxValue.gt(valueToCheck)) {
            maxValue = valueToCheck;
            maxIndex = i;
        }
    }

    return maxIndex;
});
