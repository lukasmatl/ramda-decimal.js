import {cbrt} from '../';
import Decimal from 'decimal.js';

test('cbrt 1.5 to be 1.14', () => {
    Decimal.set({precision: 3})
    expect(cbrt(1.5).toString()).toBe('1.14');
});


test('cbrt in array', () => {
    Decimal.set({precision: 3})
    const result: any = cbrt([1, 1.5]);
    const expectedResult: string[] = ['1', '1.14']
    for (let i=0; i<result.length; i++) {
        expect(result[i].toString()).toBe(expectedResult[i]);
    }
});