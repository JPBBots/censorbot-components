import { Meta } from '@storybook/react'
import { VStack, Switch } from '@chakra-ui/react'

export default {
  title: 'Switch',
  component: Switch,
} as Meta

export const _Switch = () => (
  <VStack>
    <Switch />
  </VStack>
)
