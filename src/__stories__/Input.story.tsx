import { Meta } from '@storybook/react'
import { VStack, Input } from '@chakra-ui/react'

export default {
  title: 'Input',
  component: Input,
} as Meta

export const _Input = () => (
  <VStack>
    <Input placeholder="Your name" />
  </VStack>
)
