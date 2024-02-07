import { type Profile } from '../../model/types/profile';
import { type Currency } from '@/entities/Currency';
import { type Country } from '@/entities/Country';

import {
    ProfileCardRedesigned,
    ProfileCardRedesignedError,
    ProfileCardRedesignedSkeleton,
} from '../ProfileCardRedesigned/ProfileCardRedesigned';

export interface ProfileCardProps {
    className?: string;
    data?: Profile;
    isLoading?: boolean;
    error?: string;
    readonly?: boolean;
    onChangeFirstname?: (value?: string) => void;
    onChangeLastname?: (value?: string) => void;
    onChangeAge?: (value?: string) => void;
    onChangeCity?: (value?: string) => void;
    onChangeUsername?: (value?: string) => void;
    onChangeAvatar?: (value?: string) => void;
    onChangeCurrency?: (currency: Currency) => void;
    onChangeCountry?: (country: Country) => void;
}

const ProfileCard = (props: ProfileCardProps) => {
    const { isLoading = false, error = '' } = props;

    if (isLoading) {
        return <ProfileCardRedesignedSkeleton />;
    }

    if (error) {
        return <ProfileCardRedesignedError />;
    }

    return <ProfileCardRedesigned {...props} />;
};

export { ProfileCard };
