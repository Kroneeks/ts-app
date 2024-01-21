import { combineReducers } from '@reduxjs/toolkit';
import { type ArticleDetailsPageSchema } from '../types';
import { articleDetailsPageRecomendationReducer } from './articleDetailsPageRecomendationSlice';
import { articleDetailsCommentsReducer } from './articleDetailsCommentsSlice';

export const articleDetailsPageReducer =
    combineReducers<ArticleDetailsPageSchema>({
        recommendations: articleDetailsPageRecomendationReducer,
        comments: articleDetailsCommentsReducer,
    });
