import {asinh} from '../';
import Decimal from 'decimal.js';

test('asinh 0.5 to be 0.481', () => {
    Decimal.set({precision: 3})
    expect(asinh(0.5).toString()).toBe('0.481');
});


test('asinh in array', () => {
    Decimal.set({precision: 3})
    const result: any = asinh([0.5, 1]);
    const expectedResult: string[] = ['0.481', '0.881']
    for (let i=0; i<result.length; i++) {
        expect(result[i].toString()).toBe(expectedResult[i]);
    }
});