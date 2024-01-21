import { type StateSchema } from '@/app/providers/StoreProvider';
import { getCounter } from './getCounter';
import { type DeepPartial } from '@reduxjs/toolkit';

describe('getCounter', () => {
    it('shoult return counter value', () => {
        const counter = { value: 10 };

        const state: DeepPartial<StateSchema> = {
            counter,
        };
        expect(getCounter(state as StateSchema)).toEqual(counter);
    });
});
