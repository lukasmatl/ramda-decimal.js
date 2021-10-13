import Decimal from 'decimal.js';
import {isNil, isEmpty} from 'ramda'

/**
 * Function to call Decimal.sum method on one or array of decimals
 * @param n
 */
export const sum = (n: Decimal.Value[]): Decimal | null => {
    if (isNil(n) || isEmpty(n)) return null;

    return Decimal.sum(...n);
}
