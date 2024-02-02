import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './LoginForm.module.scss';
import { useTranslation } from 'react-i18next';
import { Button as ButtonDeprecated } from '@/shared/ui/deprecated/Button';
import { Input as InputDeprecated } from '@/shared/ui/deprecated/Input';
import { useSelector } from 'react-redux';
import { memo, useCallback } from 'react';
import { loginActions, loginReducer } from '../../model/slice/loginSlice';
import { loginByUsername } from '../../model/services/loginByUsername/loginByUsername';
import { Text as TextDeprecated, TextTheme } from '@/shared/ui/deprecated/Text';
import { getLoginUsername } from '../../model/selectors/getLoginUsername/getLoginUsername';
import { getLoginPassword } from '../../model/selectors/getLoginPassword/getLoginPassword';
import { getLoginError } from '../../model/selectors/getLoginErrror/getLoginError';
import { getLoginIsLoading } from '../../model/selectors/getLoginIsLoading/getLoginIsLoading';
import {
    DynamicModuleLoader,
    type ReducersList,
} from '@/shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';
import { ToggleFeatures } from '@/shared/lib/features';
import { Button } from '@/shared/ui/redesigned/Button';
import { Input } from '@/shared/ui/redesigned/Input';
import { Text } from '@/shared/ui/redesigned/Text';
import { VStack } from '@/shared/ui/redesigned/Stack';
import { useForceUpdate } from '@/shared/lib/render/forceUpdate';

export interface LoginFormProps {
    className?: string;
    onSuccess: () => void;
}

const initialReducers: ReducersList = {
    loginForm: loginReducer,
};

const LoginForm = memo(({ className = '', onSuccess }: LoginFormProps) => {
    const { t } = useTranslation('loginForm');
    const dispatch = useAppDispatch();
    const username = useSelector(getLoginUsername);
    const password = useSelector(getLoginPassword);
    const error = useSelector(getLoginError);
    const isLoading = useSelector(getLoginIsLoading);
    const forceUpdate = useForceUpdate();

    const onChangeUsername = useCallback(
        (value: string) => {
            dispatch(loginActions.setUsername(value));
        },
        [dispatch],
    );

    const onChangePassword = useCallback(
        (value: string) => {
            dispatch(loginActions.setPassword(value));
        },
        [dispatch],
    );

    const onLoginClick = useCallback(async () => {
        const result = await dispatch(loginByUsername({ username, password }));
        if (result.meta.requestStatus === 'fulfilled') {
            onSuccess();
            // todo remove in production
            forceUpdate();
        }
    }, [onSuccess, dispatch, forceUpdate, username, password]);

    return (
        <DynamicModuleLoader reducers={initialReducers}>
            <ToggleFeatures
                feature="isAppRedesigned"
                on={
                    <VStack
                        gap="16"
                        className={classNames(cls.LoginForm, {}, [className])}
                    >
                        <Text title={t('Форма авторизации')} />
                        {error && (
                            <Text
                                text={t('Вы ввели неверный логин или пароль')}
                                variant="error"
                                className={cls.loginError}
                            />
                        )}
                        <Input
                            value={username}
                            onChange={onChangeUsername}
                            placeholder="Введите логин"
                        />
                        <Input
                            value={password}
                            onChange={onChangePassword}
                            placeholder="Введите пароль"
                        />
                        <Button
                            onClick={onLoginClick}
                            className={cls.loginBtn}
                            disabled={isLoading}
                        >
                            {t('Войти')}
                        </Button>
                    </VStack>
                }
                off={
                    <div className={classNames(cls.LoginForm, {}, [className])}>
                        <TextDeprecated
                            title={t('Форма авторизации')}
                            className={cls.loginTitle}
                        />
                        {error && (
                            <TextDeprecated
                                text={t('Вы ввели неверный логин или пароль')}
                                theme={TextTheme.ERROR}
                                className={cls.loginError}
                            />
                        )}
                        <InputDeprecated
                            value={username}
                            onChange={onChangeUsername}
                            placeholder="Введите логин"
                        />
                        <InputDeprecated
                            value={password}
                            onChange={onChangePassword}
                            placeholder="Введите пароль"
                        />
                        <ButtonDeprecated
                            onClick={onLoginClick}
                            className={cls.loginBtn}
                            disabled={isLoading}
                        >
                            {t('Войти')}
                        </ButtonDeprecated>
                    </div>
                }
            />
        </DynamicModuleLoader>
    );
});

LoginForm.displayName = 'LoginForm';

export default LoginForm;
