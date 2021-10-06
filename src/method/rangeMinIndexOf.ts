import Decimal from 'decimal.js';
import {isNil, isEmpty, curry} from 'ramda'
import {checkAndInstantiateDecimal} from '../util';


export const rangeMinIndexOf  = curry((fromIndex: number, toIndex: number, getLast: boolean, array: Decimal.Value[]): number | null => {
    if (isNil(array) || isEmpty(array) || isNaN(fromIndex) || isNaN(toIndex)) return null;

    let minIndex: number  = fromIndex;
    let minValue: Decimal = checkAndInstantiateDecimal(array[fromIndex]);
    for (let i=fromIndex+1; i<=toIndex; i++) {
        const valueToCheck: Decimal = checkAndInstantiateDecimal(array[i]);
        if (getLast? minValue.lte(valueToCheck): minValue.lt(valueToCheck)) {
            minValue = valueToCheck;
            minIndex = i;
        }
    }

    return minIndex;
});
