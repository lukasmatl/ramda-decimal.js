import Decimal from "decimal.js";

export const checkAndInstantiateDecimal = (n: any): Decimal => {
    if (Decimal.isDecimal(n)) {
        return n;
    } else {
        return new Decimal(n);
    }
}
