import { createSelector } from '@reduxjs/toolkit'
import { getUserAuthData } from '@/entities/User'
import { type SidebarItemType } from '../types/sidebar'
import { RoutePath } from '@/shared/config/routeConfig/routeConfig'

import MainIcon from '@/shared/assets/icons/main.svg?react'
import AboutIcon from '@/shared/assets/icons/about.svg?react'
import ProfileIcon from '@/shared/assets/icons/profile.svg?react'
import ArticlesIcon from '@/shared/assets/icons/articles.svg?react'

export const getSidebarItems = createSelector(
  getUserAuthData,
  (userData) => {
    const sidebarItemsList: SidebarItemType[] = [
      {
        path: RoutePath.main,
        text: 'Главная',
        Icon: MainIcon
      },
      {
        path: RoutePath.about,
        text: 'О сайте',
        Icon: AboutIcon
      }
    ]

    if (userData) {
      sidebarItemsList.push(
        {
          path: RoutePath.profile + userData.id,
          text: 'Профиль',
          Icon: ProfileIcon,
          authOnly: true
        },
        {
          path: RoutePath.articles,
          text: 'Посты',
          Icon: ArticlesIcon,
          authOnly: true
        }
      )
    }

    return sidebarItemsList
  }
)
