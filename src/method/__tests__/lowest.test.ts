import {lowest} from '../';
import Decimal from 'decimal.js';

test('lowest to be -1', () => {
    Decimal.set({precision: 3})
    expect(lowest(3, [1,2,3,45,100,100,-1,65,0.15]).toString()).toBe('-1');
});