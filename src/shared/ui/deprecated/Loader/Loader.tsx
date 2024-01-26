import { classNames } from '@/shared/lib/classNames/classNames';
import './Loader.scss';

interface LoaderProps {
    className?: string;
}

/**
 * Component is deprecated, better use components from REDESIGN folder
 * @deprecated
 */
const Loader = ({ className = '' }: LoaderProps): React.ReactElement => {
    return (
        <div className={classNames('lds-default', {}, [className])}>
            <div />
            <div />
            <div />
            <div />
            <div />
            <div />
            <div />
            <div />
            <div />
            <div />
            <div />
            <div />
        </div>
    );
};

export { Loader };
