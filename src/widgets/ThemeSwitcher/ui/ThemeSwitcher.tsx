import { classNames } from 'shared/lib/classNames/classNames'
import cls from './ThemeSwitcher.module.scss'
import { useTheme } from 'app/providers/ThemeProvider'
import LightIcon from 'shared/assets/icons/theme-light.svg'
import DarkIcon from 'shared/assets/icons/theme-dark.svg'
import { Theme } from 'app/providers/ThemeProvider/lib/ThemeContext'
import { Button, ButtonTheme } from 'shared/ui/Button/Button'

interface ThemeSwitcherProps {
  className?: string
}

const ThemeSwitcher = ({ className = '' }: ThemeSwitcherProps): React.ReactElement => {
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
}

export { ThemeSwitcher }
