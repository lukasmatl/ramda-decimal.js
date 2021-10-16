import Decimal from 'decimal.js';
import {isEmpty, isNil} from 'ramda';
import {completeArray} from "../util";

/**
 * Function finds crossovers of x array over y array values and flag it with true value where it happens
 * @param x
 * @param y
 */
export const crossover = (x: Decimal.Value[], y: Decimal.Value[]): boolean[] | null => {
    if (isNil(x) || isNil(y) || isEmpty(x) || isEmpty(y) || x.length < 2 || y.length < 2) return null;

    const maxLength: number = Math.max(x.length, y.length);
    const xArray: Decimal[] = completeArray(maxLength, x);
    const yArray: Decimal[] = completeArray(maxLength, y);

    const resultArray: boolean[] = [];

    for (let i = 1; i < maxLength; i++) {
        resultArray.push(xArray[i-1].gte(yArray[i-1]) && xArray[i].lt(yArray[i]));
    }

    return resultArray;
};
