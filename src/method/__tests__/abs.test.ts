import {abs} from '../';

test('abs -2 to be 2', () => {
    expect(abs(-2).toString()).toBe('2');
});

test('abs in array', () => {
    const result: any = abs([-2, -3, 0]);
    const expectedResult: string[] = ['2', '3', '0']
    for (let i=0; i<result.length; i++) {
        expect(result[i].toString()).toBe(expectedResult[i]);
    }
});