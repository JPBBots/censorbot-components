import { Meta } from '@storybook/react'
import { VStack, Select } from '@chakra-ui/react'

export default {
  title: 'Inputs/Select',
  component: Select,
} as Meta

export const _Select = () => (
  <VStack>
    <Select placeholder="Select an option">
      <option value="option1">Option 1</option>
      <option value="option2">Option 2</option>
      <option value="option3">Option 3</option>
    </Select>
    <Select size="sm" placeholder="Select an option">
      <option value="option1">Option 1</option>
      <option value="option2">Option 2</option>
      <option value="option3">Option 3</option>
    </Select>
  </VStack>
)
