import type { PropsWithChildren } from 'react'
import { Box, HStack, StackProps, Text } from '@chakra-ui/react'
import { CensorBotIcon } from '@/views/Header/CensorBotIcon'

const ICON_SIZE = '40px'
const HEADER_HEIGHT = '90px'

export interface HeaderProps extends PropsWithChildren<unknown> {
  title: string
  logoProps?: StackProps
  headerProps?: StackProps
}

export const Header = ({
  title,
  headerProps,
  logoProps,
  children,
}: HeaderProps) => (
  <HStack
    px={8}
    h={HEADER_HEIGHT}
    justify="space-between"
    w="full"
    flexShrink={0}
    flexGrow={0}
    {...(headerProps || {})}
  >
    <HStack spacing={4} {...(logoProps || {})}>
      <CensorBotIcon boxSize={ICON_SIZE} />
      <Text as="h1" color="lighter.100" textStyle="heading.xl">
        {title}
      </Text>
    </HStack>
    <Box>{children}</Box>
  </HStack>
)
