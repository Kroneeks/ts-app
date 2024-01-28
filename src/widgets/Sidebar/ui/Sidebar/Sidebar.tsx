import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './Sidebar.module.scss';
import { memo, useMemo, useState } from 'react';
import { SidebarItem } from '../SidebarItem/ui/SidebarItem';
import { useSelector } from 'react-redux';
import { getSidebarItems } from '../../model/selectors/getSidebarItems';
import { ThemeSwitcher } from '@/features/ThemeSwitcher';
import { LangSwitcher } from '@/features/LangSwitcher';
import { AppLogo } from '@/shared/ui/redesigned/AppLogo';
import { VStack } from '@/shared/ui/redesigned/Stack';
import { Icon } from '@/shared/ui/redesigned/Icon';
import ArrowIcon from '@/shared/assets/icons/arrow.svg?react';

interface SidebarProps {
    className?: string;
}

const Sidebar = memo(({ className = '' }: SidebarProps): React.ReactElement => {
    const [collapsed, setCollapsed] = useState(false);
    const sidebarItemsList = useSelector(getSidebarItems);

    const onToggle = (): void => {
        setCollapsed((prev) => !prev);
    };

    const itemsList = useMemo(() => {
        return sidebarItemsList.map((item) => (
            <SidebarItem item={item} key={item.path} collapsed={collapsed} />
        ));
    }, [collapsed, sidebarItemsList]);

    return (
        <aside
            data-testid="sidebar-test"
            className={classNames(
                cls.SidebarRedesigned,
                { [cls.collapsedRedesigned]: collapsed },
                [className],
            )}
        >
            <AppLogo size={collapsed ? 30 : 50} className={cls.appLogo} />
            <VStack role="navigation" className={cls.items}>
                {itemsList}
            </VStack>
            <Icon
                Svg={ArrowIcon}
                data-testid="sidebar-button"
                className={cls.collapseBtn}
                onClick={onToggle}
                clickable
            />
            <div className={classNames(cls.switchers)}>
                <ThemeSwitcher />
                <LangSwitcher className={cls.lang} short={collapsed} />
            </div>
        </aside>
    );
});

Sidebar.displayName = 'Sidebar';

export { Sidebar };
