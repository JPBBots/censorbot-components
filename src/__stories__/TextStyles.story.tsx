import { Meta } from '@storybook/react'
import { VStack, Text } from '@chakra-ui/react'

export default {
  title: 'Text',
  component: Text,
} as Meta

export const _Text = () => (
  <VStack>
    <Text>Default Text</Text>
    <Text textStyle="overline">Overline Text</Text>
    <Text textStyle="label.sm">Label Small</Text>
    <Text textStyle="label.md">Label Medium</Text>
    <Text textStyle="heading.sm">Heading Small</Text>
    <Text textStyle="heading.lg">Heading Large</Text>
    <Text textStyle="heading.xl">CensorBot Heading</Text>
  </VStack>
)
