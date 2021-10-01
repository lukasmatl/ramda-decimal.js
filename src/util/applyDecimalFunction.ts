import Decimal from "decimal.js";
import {map, ifElse, Arity1Fn} from 'ramda';


export const applyDecimalFunction = (
    param: Decimal.Value | Array<Decimal.Value>,
    func: Arity1Fn) => ifElse(
    Array.isArray,
    map(func),
    func
)(param);


