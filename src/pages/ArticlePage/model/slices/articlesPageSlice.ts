import {
  type PayloadAction,
  createEntityAdapter,
  createSlice
} from '@reduxjs/toolkit'
import { ArticleView, type Article } from '@/entities/Article'
import { type StateSchema } from '@/app/providers/StoreProvider'
import { type ArticlesPageSchema } from '../types/articlesPageSchema'
import { fetchArticlesList } from '../services/fetchArticlesList/fetchArticlesList'
import { VIEW_LOCALSTORAGE_KEY } from '@/shared/const/localstorage'
import { ArticleSortField, ArticleType } from '@/entities/Article/model/consts/consts'
import { type SortOrder } from '@/shared/types'

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
    view: ArticleView.BLOCK,
    page: 1,
    hasMore: true,
    _inited: false,
    order: 'asc',
    limit: 5,
    sort: ArticleSortField.CREATED,
    search: '',
    type: ArticleType.ALL
  }),
  reducers: {
    setView: (state, action: PayloadAction<ArticleView>) => {
      state.view = action.payload
      localStorage.setItem(VIEW_LOCALSTORAGE_KEY, action.payload)
    },
    setPage: (state, action: PayloadAction<number>) => {
      state.page = action.payload
    },
    setOrder: (state, action: PayloadAction<SortOrder>) => {
      state.order = action.payload
    },
    setSort: (state, action: PayloadAction<ArticleSortField>) => {
      state.sort = action.payload
    },
    setType: (state, action: PayloadAction<ArticleType>) => {
      state.type = action.payload
    },
    setSearch: (state, action: PayloadAction<string>) => {
      state.search = action.payload
    },
    initState: state => {
      const view = localStorage.getItem(VIEW_LOCALSTORAGE_KEY) as ArticleView
      state.view = view
      state.limit = view === ArticleView.LIST ? 4 : 9
      state._inited = true
    }
  },
  extraReducers: (builder) => {
    builder.addCase(fetchArticlesList.pending, (state, action) => {
      state.error = undefined
      state.isLoading = true

      if (action.meta.arg.replace) {
        articlesAdapter.removeAll(state)
      }
    })
    builder.addCase(fetchArticlesList.fulfilled, (state, action) => {
      state.isLoading = false
      state.hasMore = action.payload.length >= state.limit

      if (action.meta.arg.replace) {
        articlesAdapter.setAll(state, action.payload)
      } else {
        articlesAdapter.addMany(state, action.payload)
      }
    })
    builder.addCase(fetchArticlesList.rejected, (state, action) => {
      state.isLoading = false
      state.error = action.payload as string
    })
  }
})

export const { reducer: articlesPageReducer, actions: articlesPageActions } = articlesPageSlice
