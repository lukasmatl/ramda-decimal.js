import {acosh} from '../';
import Decimal from 'decimal.js';

test('acosh 2 to be 1.32', () => {
    Decimal.set({precision: 3})
    expect(acosh(2).toString()).toBe('1.32');
});


test('acosh in array', () => {
    Decimal.set({precision: 3})
    const result: any = acosh([1, 2]);
    const expectedResult: string[] = ['0', '1.32']
    for (let i=0; i<result.length; i++) {
        expect(result[i].toString()).toBe(expectedResult[i]);
    }
});