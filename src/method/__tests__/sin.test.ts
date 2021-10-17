import {sin} from '../';
import Decimal from 'decimal.js';

test('sin 45 to be 0.851', () => {
    Decimal.set({precision: 3})
    expect(sin(45).toString()).toBe('0.851');
});


test('sin in array', () => {
    Decimal.set({precision: 3})
    const result: any = sin([45, 90]);
    const expectedResult: string[] = ['0.851', '0.894']
    for (let i=0; i<result.length; i++) {
        expect(result[i].toString()).toBe(expectedResult[i]);
    }
});