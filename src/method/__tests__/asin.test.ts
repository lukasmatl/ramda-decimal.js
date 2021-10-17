import {asin} from '../';
import Decimal from 'decimal.js';

test('asin 0.5 to be 0.524', () => {
    Decimal.set({precision: 3})
    expect(asin(0.5).toString()).toBe('0.524');
});


test('asin in array', () => {
    Decimal.set({precision: 3})
    const result: any = asin([0.5, 1]);
    const expectedResult: string[] = ['0.524', '1.57']
    for (let i=0; i<result.length; i++) {
        expect(result[i].toString()).toBe(expectedResult[i]);
    }
});