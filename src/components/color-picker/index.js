import Color from './color';

import { useRadioGroup, HStack } from '@chakra-ui/react';

const ColorPicker = ({name, defaultValue, options, onChange}) => {
    const { getRootProps, getRadioProps } = useRadioGroup({
      name,
      defaultValue,
      onChange,
    });
  
    const group = getRootProps();
  
    return (
      <HStack {...group}>
        {options.map((value) => {
            const radio = getRadioProps({ value });
            return (
                <Color key={value} {...radio} bgColor={value} />
            )
        })}
      </HStack>
    )
}

export default ColorPicker;