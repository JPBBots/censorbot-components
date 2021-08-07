import { Option } from '@/views/Option/Option'
import { Section } from '@/views/Section/Section'
import type { Meta } from '@storybook/react'
import { VStack } from '@chakra-ui/react'

export default {
  title: 'Views/Option',
  component: Option,
} as Meta

export const _Option = () => (
  <Section>
    <VStack w="full" spacing="none">
      <Option name="sample-option-1" label="Filter sent and edited messages" />
      <Option name="sample-option-2" label="Filter usernames and nicknames" />
      <Option
        isPremium
        name="sample-option-3"
        label="Filter reactions on messages"
      />
      <Option isDisabled name="sample-option-4" label="Disabled" />
      <Option
        isPremium
        isDisabled
        name="sample-option-5"
        label="Disabled but premium"
      />
    </VStack>
  </Section>
)
