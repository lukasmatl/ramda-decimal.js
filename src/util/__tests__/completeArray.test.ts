import {completeArray} from '../';
import Decimal from "decimal.js";

test('completeArrayay', () => {
    const result: Decimal[] = completeArray(4, [1,2,3]);
    const expectedResult: string[] = ['0','1','2', '3']
    for (let i=0; i<result.length; i++) {
        expect(result[i].toString()).toBe(expectedResult[i]);
    }
});