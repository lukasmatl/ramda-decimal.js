import Decimal from "decimal.js";
import {map, ifElse} from 'ramda';


export const applyDecimalFunction = (
    param: Decimal.Value | Decimal.Value[],
    func:  (a: any) => any) => ifElse(
    Array.isArray,
    map(func),
    func
)(param);


