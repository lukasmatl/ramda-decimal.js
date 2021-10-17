import Decimal from 'decimal.js';

/**
 * Function to check if it's decimal it returns the parameter
 * otherwise it instantiate Decimal from parameter
 * @param n
 */
export const checkAndInstantiateDecimal = (n: any): Decimal => {
    if (Decimal.isDecimal(n)) {
        return n;
    } else {
        return new Decimal(n);
    }
}
