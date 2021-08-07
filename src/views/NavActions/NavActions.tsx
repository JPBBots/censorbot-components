import type { FunctionComponent } from 'react'
import type { StackProps } from '@chakra-ui/react'
import {
  Button,
  HStack,
  Link,
  Box,
  Avatar,
  Icon,
  Center,
} from '@chakra-ui/react'
import { FaChevronDown } from 'react-icons/fa'

export type NavUserType = {
  avatarUrl: string
}

export type NavActionType = {
  label: string
  href?: string
  isActive?: boolean
  onClick?(): void
}

export interface NavActionsProps extends Omit<StackProps, 'children'> {
  actions: Array<NavActionType>
  user?: NavUserType
  onLogin?(): void
  onUserClick?(): void
  customAsLink?: FunctionComponent
}

export const NavActions = ({
  actions,
  user,
  onLogin = () => {},
  customAsLink,
  ...stackProps
}: NavActionsProps) => (
  <HStack spacing={4} {...stackProps}>
    <HStack spacing={2}>
      {actions.map((action, i) => {
        const withLinkProps = action.href
          ? { as: customAsLink || Link, href: action.href }
          : {}
        return (
          <Button
            key={i}
            size="none"
            variant="none"
            {...withLinkProps}
            textStyle="label.md"
            onClick={action.onClick || (() => {})}
            color="lighter.40"
          >
            {action.label}
          </Button>
        )
      })}
      {!user && (
        <Box pl={2}>
          <Button variant="primary" size="sm" onClick={onLogin}>
            Login
          </Button>
        </Box>
      )}
    </HStack>
    {user && (
      <HStack
        h={8}
        spacing={2}
        rounded="sm"
        as={Button}
        size="none"
        variant="none"
        color="lighter.60"
        _hover={{ bg: 'lighter.5', color: 'lighter.100' }}
        _focus={{ bg: 'lighter.10', color: 'lighter.100' }}
      >
        <Avatar boxSize={12} src={user.avatarUrl} />
        <Center>
          <Icon boxSize={4} as={FaChevronDown} color="currentColor" />
        </Center>
      </HStack>
    )}
  </HStack>
)
