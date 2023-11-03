import { classNames } from 'shared/lib/classNames/classNames'
import cls from './LoginForm.module.scss'
import { useTranslation } from 'react-i18next'
import { Button } from 'shared/ui/Button/Button'
import { Input } from 'shared/ui/Input/Input'
import { useDispatch, useSelector } from 'react-redux'
import { memo, useCallback } from 'react'
import { loginActions } from '../../model/slice/loginSlice'
import { getLoginState } from '../../model/selectors/getLoginState/getLoginState'
import { loginByUsername } from '../../model/services/loginByUsername/loginByUsername'
import { useAppDispatch } from 'app/providers/StoreProvider/config/store'
import { Text, TextTheme } from 'shared/ui/Text/Text'

interface LoginFormProps {
  className?: string
}

const LoginForm = memo(({ className = '' }: LoginFormProps) => {
  const { t } = useTranslation('loginForm')
  const dispatch = useAppDispatch()
  const { username, password, error, isLoading } = useSelector(getLoginState)

  const onChangeUsername = useCallback((value: string) => {
    dispatch(loginActions.setUsername(value))
  }, [dispatch])

  const onChangePassword = useCallback((value: string) => {
    dispatch(loginActions.setPassword(value))
  }, [dispatch])

  const onLoginClick = useCallback(() => {
    void dispatch(loginByUsername({ username, password }))
  }, [dispatch, username, password])

  return (
      <div className={classNames(cls.LoginForm, {}, [className])}>
          <Text title={t('Форма авторизации')} className={cls.loginTitle} />
          {error && <Text text={error} theme={TextTheme.ERROR} className={cls.loginError} />}
          <Input value={username} onChange={onChangeUsername} placeholder='Введите логин' />
          <Input value={password} onChange={onChangePassword} placeholder='Введите пароль'/>
          <Button onClick={onLoginClick} className={cls.loginBtn} disabled={isLoading}>{t('Войти')}</Button>
      </div>
  )
})

LoginForm.displayName = 'LoginForm'

export { LoginForm }
