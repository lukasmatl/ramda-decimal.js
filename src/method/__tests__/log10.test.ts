import {log10} from '../';
import Decimal from 'decimal.js';

test('log10 10 to be 1', () => {
    Decimal.set({precision: 3})
    expect(log10(10).toString()).toBe('1');
});
test('log10 in array', () => {
    Decimal.set({precision: 3})
    const result: any = log10([10, 100]);
    const expectedResult: string[] = ['1', '2']
    for (let i=0; i<result.length; i++) {
        expect(result[i].toString()).toBe(expectedResult[i]);
    }
});