import Decimal from 'decimal.js';
import {flatten} from 'ramda';


export const max = (...n: Decimal.Value[]): Decimal => {
    const array= flatten(n);
    return Decimal.max(...array);
};
