import {sub} from '../';
import Decimal from 'decimal.js';

test('sub 10, 2.01 to be 7.99', () => {
    Decimal.set({precision: 3})
    expect(sub(10, 2.01).toString()).toBe('7.99');
});
