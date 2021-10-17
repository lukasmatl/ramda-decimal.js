import {cos} from '../';
import Decimal from 'decimal.js';

test('cos 0 to be 1', () => {
    Decimal.set({precision: 3})
    expect(cos(0).toString()).toBe('1');
});


test('cos in array', () => {
    Decimal.set({precision: 3})
    const result: any = cos([0, 1]);
    const expectedResult: string[] = ['1', '0.54']
    for (let i=0; i<result.length; i++) {
        expect(result[i].toString()).toBe(expectedResult[i]);
    }
});