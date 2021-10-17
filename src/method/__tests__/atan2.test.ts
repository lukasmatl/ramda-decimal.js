import {atan2} from '../';
import Decimal from 'decimal.js';

test('atan2 0.5, 1 to be 0.464', () => {
    Decimal.set({precision: 3})
    expect(atan2(0.5, 1).toString()).toBe('0.464');
});