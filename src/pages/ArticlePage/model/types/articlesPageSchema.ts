import { type EntityState } from '@reduxjs/toolkit'
import { type ArticleView, type Article, type ArticleType, type ArticleSortField } from '@/entities/Article'

import { type SortOrder } from '@/shared/types'

export interface ArticlesPageSchema extends EntityState<Article> {
  isLoading?: boolean
  error?: string

  page: number
  limit: number
  hasMore: boolean

  view: ArticleView
  order: SortOrder
  sort: ArticleSortField
  search: string
  type: ArticleType

  _inited: boolean
}
