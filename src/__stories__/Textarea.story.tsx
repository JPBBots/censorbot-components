import { Meta } from '@storybook/react'
import { VStack, Textarea } from '@chakra-ui/react'

export default {
  title: 'Inputs/Textarea',
  component: Textarea,
} as Meta

export const _Textarea = () => (
  <VStack>
    <Textarea placeholder="Your very long content of some sort" />
  </VStack>
)
