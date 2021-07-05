import { Meta } from '@storybook/react'
import { Button } from '@/views/Button/Button'
import { VStack } from '@chakra-ui/react'

export default {
  title: 'Views/Button',
  component: Button,
} as Meta

export const Default = () => (
  <VStack spacing="16px">
    <Button>Button Label</Button>
    <Button variant="primary">Button Label</Button>
  </VStack>
)
