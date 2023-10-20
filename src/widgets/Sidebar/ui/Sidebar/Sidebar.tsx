import { classNames } from 'shared/lib/classNames/classNames'
import cls from './Sidebar.module.scss'
import { useState } from 'react'
import { Button, ButtonTheme } from 'shared/ui/Button/Button'
import { ThemeSwitcher } from 'widgets/ThemeSwitcher'
import { LangSwitcher } from 'widgets/LangSwitcher'
import ToggleIcon from 'shared/assets/icons/toggle-sidebar.svg'

interface SidebarProps {
  className?: string
}

const Sidebar = ({ className = '' }: SidebarProps): React.ReactElement => {
  const [collapsed, setCollapsed] = useState(false)

  const onToggle = (): void => {
    setCollapsed(prev => !prev)
  }

  return (
      <div data-testid="sidebar-test" className={classNames(cls.Sidebar, { [cls.collapsed]: collapsed }, [className])}>
          <Button data-testid="sidebar-button" theme={ButtonTheme.CLEAR} onClick={onToggle}><ToggleIcon className={classNames(cls.ToggleIcon)} fill="white" /></Button>
          <div className={classNames(cls.switchers)}>
              <ThemeSwitcher />
              <LangSwitcher className={cls.lang} />
          </div>
      </div>
  )
}

export { Sidebar }
