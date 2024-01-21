import { ArticleView } from '@/entities/Article';
import { initArticlesPage } from './initArticlesPage';
import { TestAsyncThunk } from '@/shared/lib/tests/TestAsyncThunk/TestAsyncThunk';
import { fetchArticlesList } from '../fetchArticlesList/fetchArticlesList';
import {
    ArticleSortField,
    ArticleType,
} from '@/entities/Article/model/consts/consts';

jest.mock('../fetchArticlesList/fetchArticlesList');

describe('initArticlesPage.test', () => {
    it('Success with inited false', async () => {
        const thunk = new TestAsyncThunk(initArticlesPage, {
            articlesPage: {
                page: 1,
                ids: [],
                entities: {},
                limit: 5,
                isLoading: false,
                hasMore: true,
                view: ArticleView.BLOCK,
                _inited: false,
                order: 'asc',
                sort: ArticleSortField.CREATED,
                search: '',
                type: ArticleType.ECONOMICS,
            },
        });
        await thunk.callThunk(new URLSearchParams());
        expect(thunk.dispatch).toBeCalledTimes(4);
    });
    it('Not loading when inited true', async () => {
        const thunk = new TestAsyncThunk(initArticlesPage, {
            articlesPage: {
                page: 2,
                ids: [],
                entities: {},
                limit: 5,
                isLoading: false,
                hasMore: false,
                view: ArticleView.BLOCK,
                _inited: true,
                order: 'asc',
                sort: ArticleSortField.CREATED,
                search: '',
                type: ArticleType.ECONOMICS,
            },
        });
        await thunk.callThunk(new URLSearchParams());
        expect(thunk.dispatch).toBeCalledTimes(2);
        expect(fetchArticlesList).not.toHaveBeenCalled();
    });
});
