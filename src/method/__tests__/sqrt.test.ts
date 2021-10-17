import {sqrt} from '../';
import Decimal from 'decimal.js';

test('sqrt 9 to be 9.99', () => {
    Decimal.set({precision: 3})
    expect(sqrt(9).toString()).toBe('3');
});


test('sqrt in array', () => {
    Decimal.set({precision: 3})
    const result: any = sqrt([99.9, 85.2]);
    const expectedResult: string[] = ['9.99', '9.23']
    for (let i=0; i<result.length; i++) {
        expect(result[i].toString()).toBe(expectedResult[i]);
    }
});