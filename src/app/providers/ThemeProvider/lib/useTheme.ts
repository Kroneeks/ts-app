import { useContext } from 'react'
import { LOCAL_STORAGE_THEME_KEY, ThemeContext, Theme } from './ThemeContext'

interface useThemeResult {
  toggleTheme: () => void
  theme: Theme
}

export function useTheme (): useThemeResult {
  const { theme, setTheme } = useContext(ThemeContext)

  const toggleTheme = (): void => {
    let newTheme: Theme
    switch (theme) {
      case Theme.DARK:
        newTheme = Theme.LIGHT
        break
      case Theme.LIGHT:
        newTheme = Theme.LIGHT_BLUE
        break
      case Theme.LIGHT_BLUE:
        newTheme = Theme.DARK
        break
      default:
        newTheme = Theme.LIGHT_BLUE
        break
    }
    setTheme?.(newTheme)
    localStorage.setItem(LOCAL_STORAGE_THEME_KEY, newTheme)
  }

  return {
    theme: theme ?? Theme.LIGHT,
    toggleTheme
  }
}
