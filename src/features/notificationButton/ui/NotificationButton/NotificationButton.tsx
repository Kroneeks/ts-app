import { useTranslation } from 'react-i18next'
import { memo } from 'react'
import { Popover } from 'shared/ui/Popups'
import { Button, ButtonTheme } from 'shared/ui/Button/Button'
import NotificationIcon from 'shared/assets/icons/notifications.svg'
import { Icon, IconTheme } from 'shared/ui/Icon/Icon'
import { NotificationList } from 'entities/Notification'
import cls from './NotificationButton.module.scss'
import { classNames } from 'shared/lib/classNames/classNames'

interface NotificationButtonProps {
  className?: string
}

const NotificationButton = memo((props: NotificationButtonProps) => {
  const { className } = props
  const { t } = useTranslation()

  return (
      <Popover
          className={classNames(cls.NotificationButton, {}, [className])}
          direction='bottom left'
          trigger={(
              <Button theme={ButtonTheme.CLEAR}>
                  <Icon Svg={NotificationIcon} theme={IconTheme.INVERTED} />
              </Button>
                )}>
          <NotificationList className={cls.notifications} />
      </Popover>
  )
})

NotificationButton.displayName = 'NotificationButton'

export { NotificationButton }
