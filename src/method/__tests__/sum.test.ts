import {sum} from '../';
import Decimal from 'decimal.js';

test('sum 10,10 to be 20', () => {
    Decimal.set({precision: 3})
    expect(sum([10,10]).toString()).toBe('20');
});
