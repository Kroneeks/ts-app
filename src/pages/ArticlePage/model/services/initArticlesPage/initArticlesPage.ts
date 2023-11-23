import { createAsyncThunk } from '@reduxjs/toolkit'
import { type ThunkConfig } from 'app/providers/StoreProvider'
import { getArticlesPageInited } from '../../selectors/articlesPageSelector'
import { articlesPageActions } from '../../slices/articlesPageSlice'
import { fetchArticlesList } from '../fetchArticlesList/fetchArticlesList'

export const initArticlesPage = createAsyncThunk<void, void, ThunkConfig<string>>(
  'articlesPage/initArticlesPage',
  async (_, thunkApi) => {
    const { getState, dispatch } = thunkApi
    const inited = getArticlesPageInited(getState())

    if (!inited) {
      dispatch(articlesPageActions.initState())
      void dispatch(fetchArticlesList({
        page: 1
      }))
    }
  }
)