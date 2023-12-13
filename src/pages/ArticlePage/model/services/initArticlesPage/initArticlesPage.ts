import { createAsyncThunk } from '@reduxjs/toolkit'
import { type ThunkConfig } from 'app/providers/StoreProvider'
import { getArticlesPageInited } from '../../selectors/articlesPageSelector'
import { articlesPageActions } from '../../slices/articlesPageSlice'
import { fetchArticlesList } from '../fetchArticlesList/fetchArticlesList'
import { type ArticleSortField } from 'entities/Article'
import { type SortOrder } from 'shared/types'

export const initArticlesPage = createAsyncThunk<void, URLSearchParams, ThunkConfig<string>>(
  'articlesPage/initArticlesPage',
  async (searchParams, thunkApi) => {
    const { getState, dispatch } = thunkApi
    const inited = getArticlesPageInited(getState())

    if (!inited) {
      const orderFromURL = searchParams.get('order') as SortOrder
      const sortFromURL = searchParams.get('sort') as ArticleSortField
      const searchFromURL = searchParams.get('search')

      if (orderFromURL) {
        dispatch(articlesPageActions.setOrder(orderFromURL))
      }
      if (sortFromURL) {
        dispatch(articlesPageActions.setSort(sortFromURL))
      }
      if (searchFromURL) {
        dispatch(articlesPageActions.setSearch(searchFromURL))
      }

      dispatch(articlesPageActions.initState())
      void dispatch(fetchArticlesList({}))
    }
  }
)
