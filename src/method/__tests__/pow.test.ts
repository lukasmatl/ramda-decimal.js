import {pow} from '../';
import Decimal from 'decimal.js';

test('pow 10, 10 to be 10000000000', () => {
    Decimal.set({precision: 3})
    expect(pow(10,10).toString()).toBe('10000000000');
});


