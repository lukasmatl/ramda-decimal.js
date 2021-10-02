import Decimal from "decimal.js";
import {applyDecimalFunction} from "../util";

export const cbrt = (n: Decimal.Value | Decimal.Value[]): Decimal | Decimal[] => applyDecimalFunction(n, Decimal.cbrt);
