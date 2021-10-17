import {atanh} from '../';
import Decimal from 'decimal.js';

test('atanh -0.1 to be -0.19', () => {
    Decimal.set({precision: 3})
    expect(atanh(-0.1).toString()).toBe('-0.1');
});


test('atanh in array', () => {
    Decimal.set({precision: 3})
    const result: any = atanh([0.7615941, -0.5]);
    const expectedResult: string[] = ['1', '-0.549']
    for (let i=0; i<result.length; i++) {
        expect(result[i].toString()).toBe(expectedResult[i]);
    }
});