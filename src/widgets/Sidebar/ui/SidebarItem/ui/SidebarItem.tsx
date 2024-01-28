import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './SidebarItem.module.scss';
import { useTranslation } from 'react-i18next';

import { useSelector } from 'react-redux';
import { getUserAuthData } from '@/entities/User';
import { type SidebarItemType } from '@/widgets/Sidebar/model/types/sidebar';
import { AppLink } from '@/shared/ui/redesigned/AppLink';
import { Icon } from '@/shared/ui/redesigned/Icon';

interface SidebarItemProps {
    item: SidebarItemType;
    collapsed: boolean;
}

const SidebarItem = ({ item, collapsed }: SidebarItemProps) => {
    const { t } = useTranslation('sidebar');
    const isAuth = useSelector(getUserAuthData);

    if (item.authOnly && !isAuth) {
        return null;
    }

    return (
        <AppLink
            to={item.path}
            className={classNames(cls.itemRedesigned, {
                [cls.collapsedRedesigned]: collapsed,
            })}
            activeClassName={cls.active}
        >
            <Icon Svg={item.Icon} />
            <span className={classNames(cls.link)}>{t(item.text)}</span>
        </AppLink>
    );
};

export { SidebarItem };
