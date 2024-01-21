import { createEntityAdapter, createSlice } from '@reduxjs/toolkit';
import { type StateSchema } from '@/app/providers/StoreProvider';
import { type ArticleDetailsRecomendationSchema } from '../types/ArticleDetailsRecomendationSchema';
import { type Article } from '@/entities/Article';
import { fetchArticleRecommendations } from '../services/fetchArticleRecommendations/fetchArticleRecommendations';

export const recomendationsAdapter = createEntityAdapter<Article>({
    selectId: (article) => article.id,
});

export const getArticleRecomendations =
    recomendationsAdapter.getSelectors<StateSchema>(
        (state) =>
            state?.articleDetailsPage?.recommendations ??
            recomendationsAdapter.getInitialState(),
    );

const articleDetailsPageRecomendationSlice = createSlice({
    name: 'articleDetailsPageRecomendation',
    initialState:
        recomendationsAdapter.getInitialState<ArticleDetailsRecomendationSchema>(
            {
                isLoading: false,
                error: undefined,
                ids: [],
                entities: {},
            },
        ),
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchArticleRecommendations.pending, (state) => {
            state.error = undefined;
            state.isLoading = true;
        });
        builder.addCase(
            fetchArticleRecommendations.fulfilled,
            (state, action) => {
                state.isLoading = false;
                recomendationsAdapter.setAll(state, action.payload);
            },
        );
        builder.addCase(
            fetchArticleRecommendations.rejected,
            (state, action) => {
                state.isLoading = false;
                state.error = action.payload as string;
            },
        );
    },
});

export const { reducer: articleDetailsPageRecomendationReducer } =
    articleDetailsPageRecomendationSlice;
