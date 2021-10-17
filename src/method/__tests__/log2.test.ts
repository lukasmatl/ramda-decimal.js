import {log2} from '../';
import Decimal from 'decimal.js';

test('log2 10 to be 3.32', () => {
    Decimal.set({precision: 3})
    expect(log2(10).toString()).toBe('3.32');
});
test('log2 in array', () => {
    Decimal.set({precision: 3})
    const result: any = log2([10, 8]);
    const expectedResult: string[] = ['3.32', '3']
    for (let i=0; i<result.length; i++) {
        expect(result[i].toString()).toBe(expectedResult[i]);
    }
});