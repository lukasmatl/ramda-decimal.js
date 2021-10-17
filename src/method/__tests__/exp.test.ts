import {exp} from '../';
import Decimal from 'decimal.js';

test('exp 2 to be 7.39', () => {
    Decimal.set({precision: 3})
    expect(exp(2).toString()).toBe('7.39');
});

test('exp in array', () => {
    Decimal.set({precision: 3})
    const result: any = exp([1, 2]);
    const expectedResult: string[] = ['2.72', '7.39']
    for (let i=0; i<result.length; i++) {
        expect(result[i].toString()).toBe(expectedResult[i]);
    }
});