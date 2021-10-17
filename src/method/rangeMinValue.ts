import Decimal from 'decimal.js';
import { isEmpty, isNil, slice} from "ramda";

/**
 * Function that finds the min value within defined range in array.
 * @param fromIndex
 * @param toIndex
 * @param getLast
 * @param array
 */
export const rangeMinValue  = (fromIndex: number, toIndex: number, array: Decimal.Value[]): Decimal | null => {
    if (isNil(array) || isEmpty(array) || isNaN(fromIndex) || isNaN(toIndex)) return null;

    const subArray: Decimal.Value[] = slice(fromIndex, toIndex, array);

    return Decimal.min(...subArray);
}
