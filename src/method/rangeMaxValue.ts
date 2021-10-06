import Decimal from 'decimal.js';
import {isNil, isEmpty, map, compose, slice} from 'ramda'
import {checkAndInstantiateDecimal} from "../util";


export const rangeMaxValue  = (n: Decimal.Value[], fromIndex: number, toIndex: number): Decimal | null => {
    if (isNil(n) || isEmpty(n) || isNaN(fromIndex) || isNaN(toIndex)) return null;

    const array: Decimal[] = compose(
        map(checkAndInstantiateDecimal),
        slice(fromIndex, toIndex)
    )(n);

    return Decimal.max(...array);
}
