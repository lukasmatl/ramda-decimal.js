import {acos} from '../acos';
import Decimal from "decimal.js";

test('acos 0 to be 1.57', () => {
    Decimal.set({precision: 3})
    expect(acos(0).toString()).toBe('1.57');
});


test('acos in array', () => {
    Decimal.set({precision: 3})
    const result: any = acos([0, 1]);
    const expectedResult: string[] = ['1.57', '0']
    for (let i=0; i<result.length; i++) {
        expect(result[i].toString()).toBe(expectedResult[i]);
    }
});





