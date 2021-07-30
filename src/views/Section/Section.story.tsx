import { Section } from './index'
import type { Meta } from '@storybook/react'
import { FaAt, FaHashtag } from 'react-icons/fa'
import { HStack, Box, Icon, VStack } from '@chakra-ui/react'

export default {
  title: 'Views/Section',
  component: Section,
} as Meta

const children = (
  <HStack spacing="md">
    <Box boxSize="48px" rounded="md" bg="lighter.5" />
    <Box boxSize="48px" rounded="md" bg="lighter.5" />
    <Box boxSize="48px" rounded="md" bg="lighter.5" />
    <Box boxSize="48px" rounded="md" bg="lighter.5" />
  </HStack>
)

export const _Section = () => <Section children={children} />

export const _SectionWithTitle = () => (
  <Section title="Title Only" children={children} />
)

export const _SectionWithTitleAndDescription = () => (
  <Section
    title="Title With Description"
    description="Here is a description to describe the content or the title."
    children={children}
  />
)

export const _SectionWithEverything = () => (
  <Section
    icon={<Icon as={FaAt} boxSize="24px" />}
    title="Title With Icon"
    description="Here is a description to describe the content or the title."
    children={children}
  />
)

export const _SectionIsPremium = () => (
  <Section
    isPremium
    icon={<Icon as={FaHashtag} boxSize="24px" />}
    title="Title With Icon, Premium"
    description="This is a premium option."
    children={children}
  />
)

export const _ALL_SECTIONS = () => (
  <VStack spacing="md">
    <_Section />
    <_SectionWithTitle />
    <_SectionWithTitleAndDescription />
    <_SectionWithEverything />
    <_SectionIsPremium />
  </VStack>
)
