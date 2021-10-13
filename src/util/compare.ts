import Decimal from 'decimal.js';
import {checkAndInstantiateDecimal} from "./checkAndInstantiateDecimal";

/**
 * Function to compare two decimals
 * @param a
 * @param b
 */
export const  compare = (a: Decimal.Value, b: Decimal.Value): number => {
    const aValue: Decimal = checkAndInstantiateDecimal(a);
    const bValue: Decimal = checkAndInstantiateDecimal(b);

    if (aValue.lt(bValue)) return -1;
    if(aValue.gt(bValue)) return 1;
    return 0;
}
