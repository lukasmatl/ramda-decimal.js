import {div} from '../';
import Decimal from 'decimal.js';

test('div 100.25 to be 5.5', () => {
    Decimal.set({precision: 3})
    expect(div(100.25, 5.5).toString()).toBe('18.2');
});