import { classNames } from '@/shared/lib/classNames/classNames'
import cls from './Sidebar.module.scss'
import { memo, useMemo, useState } from 'react'
import { Button, ButtonSize, ButtonTheme } from '@/shared/ui/Button'
import ToggleIcon from '@/shared/assets/icons/togglesidebar.svg?react'
import { SidebarItem } from '../SidebarItem/ui/SidebarItem'
import { useSelector } from 'react-redux'
import { getSidebarItems } from '../../model/selectors/getSidebarItems'
import { VStack } from '@/shared/ui/Stack'
import { Icon, IconSize, IconTheme } from '@/shared/ui/Icon'
import { ThemeSwitcher } from '@/features/ThemeSwitcher'
import { LangSwitcher } from '@/features/LangSwitcher'

interface SidebarProps {
  className?: string
}

const Sidebar = memo(({ className = '' }: SidebarProps): React.ReactElement => {
  const [collapsed, setCollapsed] = useState(false)
  const sidebarItemsList = useSelector(getSidebarItems)

  const onToggle = (): void => {
    setCollapsed(prev => !prev)
  }

  const itemsList = useMemo(() => {
    return sidebarItemsList.map((item) =>
        <SidebarItem
            item={item}
            key={item.path}
            collapsed={collapsed}
        />
    )
  }, [collapsed, sidebarItemsList])

  return (
      <aside data-testid="sidebar-test" className={classNames(cls.Sidebar, { [cls.collapsed]: collapsed }, [className])}>
          <Button data-testid="sidebar-button" className={cls.collapseBtn} theme={ButtonTheme.CLEAR} size={ButtonSize.XL} onClick={onToggle} square>
              <Icon Svg={ToggleIcon} theme={IconTheme.INVERTED} size={IconSize.S} />
          </Button>
          <VStack role="navigation" className={cls.items}>
              {itemsList}
          </VStack>
          <div className={classNames(cls.switchers)}>
              <ThemeSwitcher />
              <LangSwitcher className={cls.lang} short={collapsed} />
          </div>
      </aside>
  )
})

Sidebar.displayName = 'Sidebar'

export { Sidebar }
