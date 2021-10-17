import {sinh} from '../';
import Decimal from 'decimal.js';

test('sinh 1 to be 1.18', () => {
    Decimal.set({precision: 3})
    expect(sinh(1).toString()).toBe('1.18');
});


test('sinh in array', () => {
    Decimal.set({precision: 3})
    const result: any = sinh([1, 0.5]);
    const expectedResult: string[] = ['1.18', '0.521']
    for (let i=0; i<result.length; i++) {
        expect(result[i].toString()).toBe(expectedResult[i]);
    }
});