import { Flex, type FlexProps } from '../Flex/Flex';

type VStackProps = Omit<FlexProps, 'direction'>;

/**
 * Component is deprecated, better use components from REDESIGN folder
 * @deprecated
 */
const VStack = (props: VStackProps) => {
    const { align = 'start' } = props;

    return <Flex direction={'column'} align={align} {...props} />;
};

export { VStack };
