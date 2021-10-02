import Decimal from 'decimal.js';
import {flatten} from 'ramda';


export const min = (...n: Decimal.Value[]): Decimal => {
    const array= flatten(n);
    return Decimal.min(...array);
};
