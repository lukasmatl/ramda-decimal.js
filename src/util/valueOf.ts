import Decimal from 'decimal.js';
import {ifElse, map} from "ramda";

/**
 * Function to call valueOf method on one or array of decimals
 * @param array
 */
export const valueOf = (array: Decimal | Decimal[]): string | string[] => ifElse(
    Array.isArray,
    map((value: Decimal) => value.valueOf()),
    () => array.valueOf()
)(array);
