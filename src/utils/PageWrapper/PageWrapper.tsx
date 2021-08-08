import type { PropsWithChildren, ReactNode } from 'react'
import { VStack } from '@chakra-ui/react'

export interface PageWrapperProps extends PropsWithChildren<unknown> {
  header?: ReactNode
}

export const PageWrapper = ({ header, children }: PageWrapperProps) => (
  <VStack h="full" minH="full" w="full" flexGrow={1}>
    {header}
    {children}
  </VStack>
)
