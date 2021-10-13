import Decimal from "decimal.js";
import {compose, isEmpty, isNil, map, slice} from "ramda";
import {checkAndInstantiateDecimal} from "../util";

/**
 * Function that finds the min value within defined range in array.
 * @param fromIndex
 * @param toIndex
 * @param getLast
 * @param array
 */
export const rangeMinValue  = (fromIndex: number, toIndex: number, array: Decimal.Value[]): Decimal | null => {
    if (isNil(array) || isEmpty(array) || isNaN(fromIndex) || isNaN(toIndex)) return null;

    const subArray: Decimal[] = compose(
        map(checkAndInstantiateDecimal),
        slice(fromIndex, toIndex)
    )(array);

    return Decimal.min(...subArray);
}
