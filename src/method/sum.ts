import Decimal from 'decimal.js';
import {isNil, isEmpty, map} from 'ramda'
import {checkAndInstantiateDecimal} from "../util";


export const sum = (n: Decimal.Value[]): Decimal | null => {
    if (isNil(n) || isEmpty(n)) return null;

    const array: Decimal[] = map(checkAndInstantiateDecimal, n);
    return Decimal.sum(...array);
}
