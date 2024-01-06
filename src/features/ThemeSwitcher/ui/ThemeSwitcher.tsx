import { classNames } from '@/shared/lib/classNames/classNames'
import cls from './ThemeSwitcher.module.scss'
import LightIcon from '@/shared/assets/icons/theme-light.svg?react'
import DarkIcon from '@/shared/assets/icons/theme-dark.svg?react'
import { Theme } from '@/shared/const/theme'
import { Button, ButtonTheme } from '@/shared/ui/Button/Button'
import { memo } from 'react'
import { useTheme } from '@/shared/lib/hooks/useTheme/useTheme'

interface ThemeSwitcherProps {
  className?: string
}

const ThemeSwitcher = memo(({ className = '' }: ThemeSwitcherProps): React.ReactElement => {
  const { theme, toggleTheme } = useTheme()

  return (
      <Button
          onClick={toggleTheme}
          className={classNames(
            cls.ThemeSwitcher,
            {},
            [className]
          )}
          theme={ButtonTheme.CLEAR}
        >
          {theme === Theme.DARK
            ? <DarkIcon width={30} height={30}/>
            : <LightIcon width={30} height={30}/>
            }
      </Button>
  )
})

ThemeSwitcher.displayName = 'ThemeSwitcher'

export { ThemeSwitcher }
