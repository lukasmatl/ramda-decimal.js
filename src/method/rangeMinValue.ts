import Decimal from "decimal.js";
import {compose, isEmpty, isNil, map, slice} from "ramda";
import {checkAndInstantiateDecimal} from "../util";

export const rangeMinValue  = (n: Decimal.Value[], fromIndex: number, toIndex: number): Decimal | null => {
    if (isNil(n) || isEmpty(n) || isNaN(fromIndex) || isNaN(toIndex)) return null;

    const array: Decimal[] = compose(
        map(checkAndInstantiateDecimal),
        slice(fromIndex, toIndex)
    )(n);

    return Decimal.min(...array);
}
