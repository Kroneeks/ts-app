import { classNames } from 'shared/lib/classNames/classNames'
import cls from './LoginForm.module.scss'
import { useTranslation } from 'react-i18next'
import { Button } from 'shared/ui/Button/Button'
import { Input } from 'shared/ui/Input/Input'
import { useSelector, useStore } from 'react-redux'
import { memo, useCallback, useEffect } from 'react'
import { loginActions, loginReducer } from '../../model/slice/loginSlice'
import { loginByUsername } from '../../model/services/loginByUsername/loginByUsername'
import { useAppDispatch } from 'app/providers/StoreProvider/config/store'
import { Text, TextTheme } from 'shared/ui/Text/Text'
import { type ReduxStoreWithManager } from 'app/providers/StoreProvider'
import { getLoginUsername } from '../../model/selectors/getLoginUsername/getLoginUsername'
import { getLoginPassword } from '../../model/selectors/getLoginPassword/getLoginPassword'
import { getLoginError } from '../../model/selectors/getLoginErrror/getLoginError'
import { getLoginIsLoading } from '../../model/selectors/getLoginIsLoading/getLoginIsLoading'
import { DynamicModuleLoader, type ReducersList } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader'

interface LoginFormProps {
  className?: string
}

const initialReducers: ReducersList = {
  loginForm: loginReducer
}

const LoginForm = memo(({ className = '' }: LoginFormProps) => {
  const { t } = useTranslation('loginForm')
  const dispatch = useAppDispatch()
  const username = useSelector(getLoginUsername)
  const password = useSelector(getLoginPassword)
  const error = useSelector(getLoginError)
  const isLoading = useSelector(getLoginIsLoading)

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
      <DynamicModuleLoader reducers={initialReducers}>
          <div className={classNames(cls.LoginForm, {}, [className])}>
              <Text title={t('Форма авторизации')} className={cls.loginTitle} />
              {error && <Text text={t('Вы ввели неверный логин или пароль')} theme={TextTheme.ERROR} className={cls.loginError} />}
              <Input value={username} onChange={onChangeUsername} placeholder='Введите логин' />
              <Input value={password} onChange={onChangePassword} placeholder='Введите пароль'/>
              <Button onClick={onLoginClick} className={cls.loginBtn} disabled={isLoading}>{t('Войти')}</Button>
          </div>
      </DynamicModuleLoader>
  )
})

LoginForm.displayName = 'LoginForm'

export default LoginForm
