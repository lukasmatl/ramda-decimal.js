import Decimal from 'decimal.js';
import {ifElse, map} from "ramda";


export const valueOf = (n: Decimal | Array<Decimal>): string | Array<string> => ifElse(
    Array.isArray,
    map((value: Decimal) => value.valueOf()),
    () => n.valueOf()
)(n);
