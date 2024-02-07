import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './Code.module.scss';
import { useCallback } from 'react';

import CopyIcon from '@/shared/assets/icons/copy.svg?react';
import { Icon } from '../Icon';

interface CodeProps {
    className?: string;
    text: string;
}

const Code = (props: CodeProps) => {
    const { className = '', text } = props;

    const onCopy = useCallback(() => {
        void navigator.clipboard.writeText(text);
    }, [text]);

    return (
        <pre className={classNames(cls.CodeRedesigned, {}, [className])}>
            <Icon
                clickable
                onClick={onCopy}
                Svg={CopyIcon}
                width="20px"
                height="20px"
                className={cls.copyBtn}
            />
            <code className={cls.codeElement}>{text}</code>
        </pre>
    );
};

export { Code };
