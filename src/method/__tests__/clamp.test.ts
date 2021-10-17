import {clamp} from '../';
import Decimal from 'decimal.js';

test('clamp 0 to be 3', () => {
    Decimal.set({precision: 3})
    expect(clamp(1,2,20).toString()).toBe('2');
});