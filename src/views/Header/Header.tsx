import type { PropsWithChildren } from 'react'
import { Box, HStack } from '@chakra-ui/react'

const HEADER_HEIGHT = '110px'

export interface HeaderProps extends PropsWithChildren<unknown> {}

export const Header = ({}: HeaderProps) => (
  <HStack h={HEADER_HEIGHT} justify="space-between">
    <HStack></HStack>
    <Box></Box>
  </HStack>
)
