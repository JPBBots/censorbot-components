import type { StackProps } from '@chakra-ui/react'
import { Box, Text, VStack } from '@chakra-ui/react'

export interface CategoryProps extends StackProps {
  title: string
}

export const Category = ({ title, children, ...stackProps }: CategoryProps) => (
  <VStack w="full" flexGrow={1} spacing="none" align="start" {...stackProps}>
    <Box p="sm">
      <Text textStyle="overline" color="lighter.80">
        {title}
      </Text>
    </Box>
    {children}
  </VStack>
)
