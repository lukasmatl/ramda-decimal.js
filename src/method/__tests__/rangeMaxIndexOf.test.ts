import {rangeMaxIndexOf} from '../';
import Decimal from 'decimal.js';

test('rangeMaxIndexOf  to be 5', () => {
    Decimal.set({precision: 3})
    expect(rangeMaxIndexOf(2,5,true, [1,2,3,45,100,100,65,0.15]).toString()).toBe('5');
});


