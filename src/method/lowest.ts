import Decimal from 'decimal.js';
import {slice, compose, map} from 'ramda'
import {checkAndInstantiateDecimal} from "../util";


export const lowest = (n: Decimal.Value[], length: number): Decimal | null => {
    if (n.length < length || !length) return null;

    const subArray = compose(
        map(checkAndInstantiateDecimal),
        slice(n.length-1-length, n.length-1)
    )(n);

    return Decimal.min(subArray);
}
