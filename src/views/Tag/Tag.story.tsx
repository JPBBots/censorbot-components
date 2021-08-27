import { Tag } from './Tag'
import { VStack } from '@chakra-ui/react'
import type { Meta } from '@storybook/react'

export default {
  title: 'Views/Tag',
  component: Tag,
} as Meta

export const _Tag = () => (
  <VStack spacing={4}>
    <Tag isRole label="Administrators" color="red" />
    <Tag isRole label="Members" color="blue" />
    <Tag isChannel label="gamers-only" onClick={() => {}} />
    <Tag isChannel label="moderators" onDelete={() => {}} />
  </VStack>
)
