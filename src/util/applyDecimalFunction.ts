import Decimal from "decimal.js";
import {map, ifElse} from 'ramda';

/**
 * Function to call method on one or array of decimals
 * @param param
 * @param func
 */
export const applyDecimalFunction = (
    param: Decimal.Value | Decimal.Value[],
    func:  (a: any) => any) => ifElse(
    Array.isArray,
    map(func),
    func
)(param);


