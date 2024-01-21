import { type StateSchema } from '@/app/providers/StoreProvider';
import { type DeepPartial } from '@reduxjs/toolkit';
import {
    getArticleDetailsData,
    getArticleDetailsError,
    getArticleDetailsIsLoading,
} from './articleDetails';
import { type Article } from '../types/article';
import { ArticleType } from '../consts/consts';

describe('articleDetails', () => {
    it('Should return data object', () => {
        const data: Article = {
            id: '1',
            title: 'subtitle',
            subtitle: 'subtitle',
            img: 'src',
            views: 13,
            blocks: [],
            createdAt: '12.12.2000',
            user: { id: '1', username: 'sdfsd' },
            type: [ArticleType.IT],
        };

        const state: DeepPartial<StateSchema> = {
            articleDetails: {
                data,
                isLoading: false,
            },
        };

        expect(getArticleDetailsData(state as StateSchema)).toEqual(data);
    });

    it('Should return empty data object', () => {
        const state: DeepPartial<StateSchema> = {};

        expect(getArticleDetailsData(state as StateSchema)).toEqual(undefined);
    });

    it('Should return loading', () => {
        const state: DeepPartial<StateSchema> = {
            articleDetails: {
                isLoading: true,
            },
        };

        expect(getArticleDetailsIsLoading(state as StateSchema)).toEqual(true);
    });

    it('Should return error', () => {
        const state: DeepPartial<StateSchema> = {
            articleDetails: {
                error: 'Error',
                isLoading: false,
            },
        };

        expect(getArticleDetailsError(state as StateSchema)).toEqual('Error');
    });
});
