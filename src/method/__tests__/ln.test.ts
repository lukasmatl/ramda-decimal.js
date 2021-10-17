import {ln} from '../';
import Decimal from 'decimal.js';

test('ln 10 to be 2.3', () => {
    Decimal.set({precision: 3})
    expect(ln(10).toString()).toBe('2.3');
});
test('ln in array', () => {
    Decimal.set({precision: 3})
    const result: any = ln([10, 5]);
    const expectedResult: string[] = ['2.3', '1.61']
    for (let i=0; i<result.length; i++) {
        expect(result[i].toString()).toBe(expectedResult[i]);
    }
});