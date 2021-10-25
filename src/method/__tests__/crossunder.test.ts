import {crossunder} from '../';
import Decimal from 'decimal.js';

test('crossunder', () => {
    Decimal.set({precision: 3})
    const result: any = crossunder([-1,-2,-3,50,120,70,65,80], [1,2,3,45,100,100,65,0.15]);
    const expectedResult: boolean[] = [false,false,false,false,false,true,false,false];

    for (let i=0; i<result.length; i++) {
        expect(result[i]).toBe(expectedResult[i]);
    }
});

