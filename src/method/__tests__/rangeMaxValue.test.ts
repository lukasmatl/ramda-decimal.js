import {rangeMaxValue} from '../';
import Decimal from 'decimal.js';

test('rangeMaxValue  to be 100', () => {
    Decimal.set({precision: 3})
    expect(rangeMaxValue(2,5, [1,2,3,45,100,100,65,0.15]).toString()).toBe('100');
});

