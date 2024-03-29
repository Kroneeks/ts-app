import {
    type SliceCaseReducers,
    createSlice,
    type CreateSliceOptions,
    bindActionCreators,
} from '@reduxjs/toolkit';
import { useMemo } from 'react';
import { useDispatch } from 'react-redux';

export function buildSlice<
    State,
    CaseReducers extends SliceCaseReducers<State>,
    Name extends string = string,
>(options: CreateSliceOptions<State, CaseReducers, Name>) {
    const slice = createSlice(options);

    const useActions = () => {
        const dispatch = useDispatch();
        return useMemo(
            () =>
                // @ts-expect-error slice-actions
                bindActionCreators(slice.actions, dispatch),
            [dispatch],
        );
    };

    return {
        ...slice,
        useActions,
    };
}
