import {rangeMinIndexOf} from '../';
import Decimal from 'decimal.js';

test('rangeMinIndexOf  to be 2', () => {
    Decimal.set({precision: 3})
    expect(rangeMinIndexOf(2,6,true, [1,2,3,45,100,100,65,0.15]).toString()).toBe('2');
});