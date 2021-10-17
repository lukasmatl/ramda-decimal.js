import {tan} from '../';
import Decimal from 'decimal.js';

test('tan 3.14 to be -0.00159', () => {
    Decimal.set({precision: 3})
    expect(tan(3.14).toString()).toBe('-0.00159');
});


test('tan in array', () => {
    Decimal.set({precision: 3})
    const result: any = tan([3.14, 1]);
    const expectedResult: string[] = ['-0.00159', '1.56']
    for (let i=0; i<result.length; i++) {
        expect(result[i].toString()).toBe(expectedResult[i]);
    }
});