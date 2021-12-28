import { Meta } from '@storybook/react'
import {
  Slider,
  SliderFilledTrack,
  SliderThumb,
  SliderTrack,
  VStack,
} from '@chakra-ui/react'

export default {
  title: 'Inputs/Slider',
  component: Slider,
} as Meta

export const _Slider = () => (
  <VStack>
    <Slider w="305px" defaultValue={20}>
      <SliderTrack>
        <SliderFilledTrack />
      </SliderTrack>
      <SliderThumb />
    </Slider>
  </VStack>
)
