import {floor} from '../';
import Decimal from 'decimal.js';

test('floor 2.5 to be 2', () => {
    Decimal.set({precision: 3})
    expect(floor(2.5).toString()).toBe('2');
});
test('cosh in array', () => {
    Decimal.set({precision: 3})
    const result: any = floor([1.2, 2.7]);
    const expectedResult: string[] = ['1', '2']
    for (let i=0; i<result.length; i++) {
        expect(result[i].toString()).toBe(expectedResult[i]);
    }
});