import { Meta } from '@storybook/react'
import {
  NumberInputStepper,
  NumberDecrementStepper,
  NumberInputField,
  NumberInput,
  NumberIncrementStepper,
} from '@chakra-ui/react'

export default {
  title: 'Inputs/Number Input',
  component: NumberInput,
} as Meta

export const _NumberInput = () => (
  <>
    <NumberInput defaultValue={15} step={5} min={5} max={125}>
      <NumberInputField />
      <NumberInputStepper>
        <NumberIncrementStepper />
        <NumberDecrementStepper />
      </NumberInputStepper>
    </NumberInput>

    <NumberInput size="sm" defaultValue={15} step={5} min={5} max={125}>
      <NumberInputField />
      <NumberInputStepper>
        <NumberIncrementStepper />
        <NumberDecrementStepper />
      </NumberInputStepper>
    </NumberInput>
  </>
)
