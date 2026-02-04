import { expect, it } from 'vitest';
import { sum } from './sum';

it.skip('should return 2 when 1 + 1', () => {
    const result = sum(1, 1);

    expect(result).toBe(2);
});

it.skip('should return 0 when input a NaN', () => {
    const result = sum(1, NaN);

    expect(result).toBe(0);
});

