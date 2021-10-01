import Decimal from "decimal.js";

export const checkAndInstantiateDecimal = (n: Decimal | number | string) => {
    if (Decimal.isDecimal(n)) {
        return n;
    } else {
        return new Decimal(n);
    }
}
