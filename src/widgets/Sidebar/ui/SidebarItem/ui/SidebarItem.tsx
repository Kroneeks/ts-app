import { classNames } from 'shared/lib/classNames/classNames'
import cls from './SidebarItem.module.scss'
import { useTranslation } from 'react-i18next'
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink/AppLink'
import { type SidebarItemType } from '../../../model/items'

interface SidebarItemProps {
  item: SidebarItemType
  collapsed: boolean
}

const SidebarItem = ({ item, collapsed }: SidebarItemProps) => {
  const { t } = useTranslation('sidebar')

  return (
      <div>
          <AppLink
              theme={AppLinkTheme.SECONDARY}
              to={item.path}
              className={classNames(cls.item, { [cls.collapsed]: collapsed })}
                  >
              <item.Icon className={cls.icon} />
              <span className={classNames(cls.link)}>{t(item.text)}</span>
          </AppLink>
      </div>
  )
}

export { SidebarItem }
