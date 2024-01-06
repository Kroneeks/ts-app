import { classNames } from '@/shared/lib/classNames/classNames'
import { useTranslation } from 'react-i18next'
import { memo, useCallback } from 'react'
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch'
import { useSelector } from 'react-redux'
import { getUserAuthData, isUserAdmin, isUserManager, userActions } from '@/entities/User'
import { Dropdown } from '@/shared/ui/Popups'
import { RoutePath } from '@/shared/const/router'
import { Avatar, AvatarSize } from '@/shared/ui/Avatar/Avatar'

interface AvatarDropdownProps {
  className?: string
}

const AvatarDropdown = memo((props: AvatarDropdownProps) => {
  const { className = '' } = props
  const { t } = useTranslation()
  const dispatch = useAppDispatch()
  const isAdmin = useSelector(isUserAdmin)
  const isManager = useSelector(isUserManager)
  const authData = useSelector(getUserAuthData)

  const onLogout = useCallback(() => {
    dispatch(userActions.logout())
  }, [dispatch])

  const isAdminPanelAvailable = isAdmin || isManager

  if (!authData) {
    return null
  }

  return (
      <Dropdown
          direction='bottom left'
          className={classNames('', {}, [className])}
          items={[
            ...(isAdminPanelAvailable
              ? [{
                  content: t('Админка'),
                  href: RoutePath.adminPanel
                }]
              : []),
            {
              content: t('Профиль'),
              href: RoutePath.profile + authData.id
            },
            {
              content: t('Выйти'),
              onClick: onLogout
            }
          ]}
          trigger={<Avatar size={AvatarSize.SMALL} src={authData.avatar ?? ''} />}
        />
  )
})

AvatarDropdown.displayName = 'AvatarDropdown'

export { AvatarDropdown }
