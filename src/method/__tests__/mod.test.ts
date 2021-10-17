import {mod} from '../';
import Decimal from 'decimal.js';

test('mod 9,2 to be 1', () => {
    expect(mod(9,2).toString()).toBe('1');
});
