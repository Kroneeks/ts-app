import { createSelector } from '@reduxjs/toolkit';
import { getUserAuthData } from '@/entities/User';
import { type SidebarItemType } from '../types/sidebar';
import {
    getRouteAbout,
    getRouteArticles,
    getRouteMain,
    getRouteProfile,
} from '@/shared/const/router';

import MainIcon from '@/shared/assets/icons/main.svg?react';
import AboutIconDeprecated from '@/shared/assets/icons/about.svg?react';
import ProfileIcon from '@/shared/assets/icons/profile.svg?react';
import ArticlesIcon from '@/shared/assets/icons/articles.svg?react';

import AboutIcon from '@/shared/assets/icons/info.svg?react';
import { toggleFeatures } from '@/shared/lib/features';

export const getSidebarItems = createSelector(getUserAuthData, (userData) => {
    const sidebarItemsList: SidebarItemType[] = [
        {
            path: getRouteMain(),
            text: 'Главная',
            Icon: MainIcon,
        },
        {
            path: getRouteAbout(),
            text: 'О сайте',
            Icon: toggleFeatures({
                name: 'isAppRedesigned',
                on: () => AboutIcon,
                off: () => AboutIconDeprecated,
            }),
        },
    ];

    if (userData) {
        sidebarItemsList.push(
            {
                path: getRouteProfile(userData.id),
                text: 'Профиль',
                Icon: ProfileIcon,
                authOnly: true,
            },
            {
                path: getRouteArticles(),
                text: 'Посты',
                Icon: ArticlesIcon,
                authOnly: true,
            },
        );
    }

    return sidebarItemsList;
});
