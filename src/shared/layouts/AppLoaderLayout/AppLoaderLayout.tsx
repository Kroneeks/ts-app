import { memo } from 'react';
import cls from './AppLoaderLayout.module.scss';
import { MainLayout } from '../MainLayout';
import { HStack, VStack } from '@/shared/ui/redesigned/Stack';
import { Skeleton } from '@/shared/ui/redesigned/Skeleton';

const AppLoaderLayout = memo(() => {
    return (
        <MainLayout
            header={
                <HStack className={cls.header}>
                    <Skeleton width={40} height={40} borderR="50%" />
                </HStack>
            }
            content={
                <VStack gap="16" style={{ height: '100%' }}>
                    <Skeleton width="70%" height={32} borderR="16px" />
                    <Skeleton width="40%" height={20} borderR="16px" />
                    <Skeleton width="50%" height={20} borderR="16px" />
                    <Skeleton width="30%" height={32} borderR="16px" />
                    <Skeleton width="80%" height="40%" borderR="16px" />
                    <Skeleton width="80%" height="40%" borderR="16px" />
                </VStack>
            }
            sidebar={<Skeleton borderR="32px" width={220} height="100%" />}
        />
    );
});

AppLoaderLayout.displayName = 'AppLoaderLayout';

export { AppLoaderLayout };
