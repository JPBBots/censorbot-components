import type { Meta } from '@storybook/react'
import { FaCog } from 'react-icons/fa'
import { Icon, VStack } from '@chakra-ui/react'
import { CategoryOption } from '@/views/Category/Option/CategoryOption'

export default {
  title: 'Views/Category/Option',
  component: CategoryOption,
} as Meta

export const _Option = () => (
  <VStack>
    <VStack w="308px" spacing={1}>
      <CategoryOption
        isSelected
        icon={<Icon as={FaCog} />}
        label="Selected Option"
      />
      <CategoryOption icon={<Icon as={FaCog} />} label="Default Option" />
      <CategoryOption
        icon={<Icon as={FaCog} />}
        label="Premium Option"
        isPremium
      />
    </VStack>
  </VStack>
)
