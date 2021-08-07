import type { Meta } from '@storybook/react'
import { FaCog } from 'react-icons/fa'
import { Icon, VStack } from '@chakra-ui/react'
import { Category } from '@/views/Category/Category'
import { CategoryOption } from '@/views/Category/Option/CategoryOption'

export default {
  title: 'Views/Category',
  component: Category,
} as Meta

export const _Category = () => (
  <VStack>
    <VStack w="308px">
      <Category title="Category Title">
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
      </Category>
    </VStack>
  </VStack>
)
