import { Fragment, ReactNode } from 'react'
import { Divider, Text, VStack, HStack } from '@chakra-ui/react'
import type { PropsWithChildren } from 'react'

export interface SectionProps extends PropsWithChildren<unknown> {
  icon?: ReactNode
  title?: string
  description?: string
  isPremium?: boolean
}

export const Section = ({
  icon,
  title,
  description,
  isPremium,
  children,
}: SectionProps) => {
  const hasHeading = Boolean(title || description)

  const activeColor = isPremium ? 'brand.80' : 'lighter.80'

  return (
    <VStack
      p={4}
      w="full"
      spacing={4}
      rounded="md"
      align="start"
      bg="darker.20"
    >
      {hasHeading && (
        <Fragment>
          {title && (
            <HStack spacing={4} justify="start" color={activeColor}>
              {icon}
              <Text textStyle="heading.sm" color="inherit">
                {title}
              </Text>
            </HStack>
          )}
          <Divider color="lighter.5" />
          {description && (
            <Text textStyle="default" color="lighter.40">
              {description}
            </Text>
          )}
        </Fragment>
      )}
      {children}
    </VStack>
  )
}
