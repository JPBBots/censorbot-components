import {
  ButtonProps as ChakraButtonProps,
  Button as ChakraButton,
} from '@chakra-ui/react'

export interface ButtonProps {}

export const Button = ({
  ...chakraButtonProps
}: ChakraButtonProps & ButtonProps) => <ChakraButton {...chakraButtonProps} />
