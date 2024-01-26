import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './Sidebar.module.scss';
import { memo, useMemo, useState } from 'react';
import { Button, ButtonSize, ButtonTheme } from '@/shared/ui/deprecated/Button';
import ToggleIcon from '@/shared/assets/icons/togglesidebar.svg?react';
import { SidebarItem } from '../SidebarItem/ui/SidebarItem';
import { useSelector } from 'react-redux';
import { getSidebarItems } from '../../model/selectors/getSidebarItems';
import { ThemeSwitcher } from '@/features/ThemeSwitcher';
import { LangSwitcher } from '@/features/LangSwitcher';
import { ToggleFeatures } from '@/shared/lib/features';
import { AppLogo } from '@/shared/ui/deprecated/AppLogo';
import { Icon } from '@/shared/ui/deprecated/Icon';
import { VStack } from '@/shared/ui/deprecated/Stack';

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
        <ToggleFeatures
            feature="isAppRedesigned"
            on={
                <aside
                    data-testid="sidebar-test"
                    className={classNames(
                        cls.SidebarRedesigned,
                        { [cls.collapsed]: collapsed },
                        [className],
                    )}
                >
                    <AppLogo className={cls.appLogo} />
                </aside>
            }
            off={
                <aside
                    data-testid="sidebar-test"
                    className={classNames(
                        cls.Sidebar,
                        { [cls.collapsed]: collapsed },
                        [className],
                    )}
                >
                    <Button
                        data-testid="sidebar-button"
                        className={cls.collapseBtn}
                        theme={ButtonTheme.CLEAR}
                        size={ButtonSize.XL}
                        onClick={onToggle}
                        square
                    >
                        <Icon
                            Svg={ToggleIcon}
                            inverted
                            width="30px"
                            height="30px"
                        />
                    </Button>
                    <VStack role="navigation" className={cls.items}>
                        {itemsList}
                    </VStack>
                    <div className={classNames(cls.switchers)}>
                        <ThemeSwitcher />
                        <LangSwitcher className={cls.lang} short={collapsed} />
                    </div>
                </aside>
            }
        />
    );
});

Sidebar.displayName = 'Sidebar';

export { Sidebar };
