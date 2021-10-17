import {atan} from '../';
import Decimal from 'decimal.js';

test('atan 1 to be 0.785', () => {
    Decimal.set({precision: 3})
    expect(atan(1).toString()).toBe('0.785');
});


test('atan in array', () => {
    Decimal.set({precision: 3})
    const result: any = atan([0.5, 1]);
    const expectedResult: string[] = ['0.464', '0.785']
    for (let i=0; i<result.length; i++) {
        expect(result[i].toString()).toBe(expectedResult[i]);
    }
});