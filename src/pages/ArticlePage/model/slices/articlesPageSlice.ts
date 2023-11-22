import {
  type PayloadAction,
  createEntityAdapter,
  createSlice
} from '@reduxjs/toolkit'
import { ArticleView, type Article } from 'entities/Article'
import { type StateSchema } from 'app/providers/StoreProvider'
import { type ArticlesPageSchema } from '../types/articlesPageSchema'
import { fetchArticlesList } from '../services/fetchArticlesList/fetchArticlesList'
import { VIEW_LOCALSTORAGE_KEY } from 'shared/const/localstorage'

export const articlesAdapter = createEntityAdapter<Article>({
  selectId: (article) => article.id
})

export const getArticles = articlesAdapter.getSelectors<StateSchema>(
  (state) => state?.articlesPage ?? articlesAdapter.getInitialState()
)

const articlesPageSlice = createSlice({
  name: 'articlesPageSlice',
  initialState: articlesAdapter.getInitialState<ArticlesPageSchema>({
    isLoading: false,
    error: undefined,
    ids: [],
    entities: {},
    view: ArticleView.BLOCK
  }),
  reducers: {
    setView: (state, action: PayloadAction<ArticleView>) => {
      state.view = action.payload
      localStorage.setItem(VIEW_LOCALSTORAGE_KEY, action.payload)
    },
    initState: state => {
      state.view = localStorage.getItem(VIEW_LOCALSTORAGE_KEY) as ArticleView
    }
  },
  extraReducers: (builder) => {
    builder.addCase(fetchArticlesList.pending, (state) => {
      state.error = undefined
      state.isLoading = true
    })
    builder.addCase(fetchArticlesList.fulfilled, (state, action: PayloadAction<Article[]>) => {
      state.isLoading = false
      articlesAdapter.setAll(state, action.payload)
    })
    builder.addCase(fetchArticlesList.rejected, (state, action) => {
      state.isLoading = false
      state.error = action.payload as string
    })
  }
})

export const { reducer: articlesPageReducer, actions: articlesPageActions } = articlesPageSlice
