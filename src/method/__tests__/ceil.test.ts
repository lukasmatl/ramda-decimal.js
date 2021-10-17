import {ceil} from '../';
import Decimal from 'decimal.js';

test('ceil 1.5 to be 2', () => {
    Decimal.set({precision: 3})
    expect(ceil(1.5).toString()).toBe('2');
});

test('ceil in array', () => {
    Decimal.set({precision: 3})
    const result: any = ceil([1.5, 2.2]);
    const expectedResult: string[] = ['2', '3']
    for (let i=0; i<result.length; i++) {
        expect(result[i].toString()).toBe(expectedResult[i]);
    }
});