import { Flex, type FlexProps } from '../Flex/Flex';

type HStackProps = Omit<FlexProps, 'direction'>;

/**
 * Component is deprecated, better use components from REDESIGN folder
 * @deprecated
 */
const HStack = (props: HStackProps) => {
    return <Flex direction="row" {...props} />;
};

export { HStack };
