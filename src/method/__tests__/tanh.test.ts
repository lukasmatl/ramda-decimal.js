import {tanh} from '../';
import Decimal from 'decimal.js';

test('tan 3.14 to be 0.996', () => {
    Decimal.set({precision: 3})
    expect(tanh(3.14).toString()).toBe('0.996');
});


test('tanh in array', () => {
    Decimal.set({precision: 3})
    const result: any = tanh([3.14, 1]);
    const expectedResult: string[] = ['0.996', '0.762']
    for (let i=0; i<result.length; i++) {
        expect(result[i].toString()).toBe(expectedResult[i]);
    }
});