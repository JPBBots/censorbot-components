import { Meta } from '@storybook/react'
import { VStack, Text } from '@chakra-ui/react'

export default {
  title: 'Text',
  component: Text,
} as Meta

export const _Text = () => (
  <VStack>
    <Text>Default Text</Text>
  </VStack>
)
