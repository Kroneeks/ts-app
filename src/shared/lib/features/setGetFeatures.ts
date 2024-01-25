import { type FeatureFlags } from '@/shared/types/featureFlags';

let featureFlags: FeatureFlags;

export function setFeatureFlags(newFeatureFlags?: FeatureFlags) {
    if (newFeatureFlags) {
        featureFlags = newFeatureFlags;
    }
}

export function getFeatureFlag(flag: keyof FeatureFlags) {
    if (featureFlags?.[flag]) {
        return featureFlags[flag];
    }
    return null;
}