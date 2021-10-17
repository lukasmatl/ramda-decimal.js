import {cosh} from '../';
import Decimal from 'decimal.js';

test('cosh 0 to be 1', () => {
    Decimal.set({precision: 3})
    expect(cosh(0).toString()).toBe('1');
});


test('cosh in array', () => {
    Decimal.set({precision: 3})
    const result: any = cosh([0, 1]);
    const expectedResult: string[] = ['1', '1.54']
    for (let i=0; i<result.length; i++) {
        expect(result[i].toString()).toBe(expectedResult[i]);
    }
});