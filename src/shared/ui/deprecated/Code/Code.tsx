import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './Code.module.scss';
import { useCallback } from 'react';
import { Button, ButtonTheme } from '../Button/Button';
import CopyIcon from '@/shared/assets/icons/copy.svg?react';
import { Icon } from '../Icon';

interface CodeProps {
    className?: string;
    text: string;
}

/**
 * Component is deprecated, better use components from REDESIGN folder
 * @deprecated
 */
const Code = (props: CodeProps) => {
    const { className = '', text } = props;

    const onCopy = useCallback(() => {
        void navigator.clipboard.writeText(text);
    }, [text]);

    return (
        <pre className={classNames(cls.Code, {}, [className])}>
            <Button
                onClick={onCopy}
                className={cls.copyBtn}
                theme={ButtonTheme.CLEAR}
            >
                <Icon Svg={CopyIcon} width="20px" height="20px" />
            </Button>
            <code>{text}</code>
        </pre>
    );
};

export { Code };
