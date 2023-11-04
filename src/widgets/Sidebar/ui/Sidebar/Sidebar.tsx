import { classNames } from 'shared/lib/classNames/classNames'
import cls from './Sidebar.module.scss'
import { memo, useMemo, useState } from 'react'
import { Button, ButtonSize, ButtonTheme } from 'shared/ui/Button/Button'
import { ThemeSwitcher } from 'widgets/ThemeSwitcher'
import { LangSwitcher } from 'widgets/LangSwitcher'

import ToggleIcon from 'shared/assets/icons/toggle-sidebar.svg'
import { SidebarItemsList } from '../../model/items'
import { SidebarItem } from '../SidebarItem/ui/SidebarItem'

interface SidebarProps {
  className?: string
}

const Sidebar = memo(({ className = '' }: SidebarProps): React.ReactElement => {
  const [collapsed, setCollapsed] = useState(false)

  const onToggle = (): void => {
    setCollapsed(prev => !prev)
  }

  const itemsList = useMemo(() => {
    return SidebarItemsList.map((item) =>
        <SidebarItem
            item={item}
            key={item.path}
            collapsed={collapsed}
        />
    )
  }, [collapsed])

  return (
      <div data-testid="sidebar-test" className={classNames(cls.Sidebar, { [cls.collapsed]: collapsed }, [className])}>
          <Button data-testid="sidebar-button" className={cls.collapseBtn} theme={ButtonTheme.CLEAR} size={ButtonSize.XL} onClick={onToggle} square><ToggleIcon className={classNames(cls.ToggleIcon)} fill="white" /></Button>
          <div className={cls.items}>
              {itemsList}
          </div>
          <div className={classNames(cls.switchers)}>
              <ThemeSwitcher />
              <LangSwitcher className={cls.lang} short={collapsed} />
          </div>
      </div>
  )
})

Sidebar.displayName = 'Sidebar'

export { Sidebar }
