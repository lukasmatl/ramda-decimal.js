import Decimal from "decimal.js";
import {applyDecimalFunction} from "../util";

export const ceil = (n: Decimal.Value | Array<Decimal.Value>): Decimal | Array<Decimal> => applyDecimalFunction(n, Decimal.ceil);
