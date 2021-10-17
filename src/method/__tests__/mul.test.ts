import {mul} from '../';
import Decimal from 'decimal.js';

test('mul 10, 0.1 to be 1', () => {
    Decimal.set({precision: 3})
    expect(mul(10,0.1).toString()).toBe('1');
});
