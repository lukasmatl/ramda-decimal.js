import Decimal from 'decimal.js';
import {curry, lt, always, substract, compose, repeat, concat, ifElse} from 'ramda';

/**
 * Function to complete length of array by adding 0 values at the beginning of array.
 * @param desiredLength
 * @param array
 */
export const completeArray = curry((desiredLength: number, array: Decimal.Value[]): Decimal.Value[] => ifElse(
    lt(desiredLength),
    compose(
        (zeroArray: Decimal[]) => concat(zeroArray, array),
        (length: number) => repeat(new Decimal(0), length),
        substract(desiredLength)
    ),
    always(array)
)(array.length));