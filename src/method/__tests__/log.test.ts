import {log} from '../';
import Decimal from 'decimal.js';

test('log 10 to be 2.3', () => {
    Decimal.set({precision: 3})
    expect(log(10,10).toString()).toBe('1');
});
