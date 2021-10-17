import {highest} from '../';
import Decimal from 'decimal.js';

test('highest  to be 65', () => {
    Decimal.set({precision: 3})
    expect(highest(2, [1,2,3,45,100,100,65,0.15]).toString()).toBe('65');
});