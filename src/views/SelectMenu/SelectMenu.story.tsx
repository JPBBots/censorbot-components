import { SelectMenu } from './SelectMenu'
import type { Meta } from '@storybook/react'
import { Button, Input, VStack } from '@chakra-ui/react'
import { Tag } from '../Tag/Tag'

export default {
  title: 'Views/SelectMenu',
  component: SelectMenu,
} as Meta

export const _SelectMenu = () => (
  <VStack spacing={4}>
    <SelectMenu
      options={[
        {
          node: (
            <Tag
              w="full"
              justifyContent="start"
              isRole
              label="Moderators"
              color="#ed4245"
              onClick={() => {}}
              bg="transparent"
              _hover={{
                bg: 'lighter.5',
              }}
            />
          ),
        },
        {
          node: (
            <Tag
              w="full"
              justifyContent="start"
              isRole
              label="Administrators"
              color="#3178c6"
              onClick={() => {}}
              bg="transparent"
              _hover={{
                bg: 'lighter.5',
              }}
            />
          ),
        },
      ]}
      popoverProps={{
        autoFocus: false,
        matchWidth: true,
        gutter: 0,
        returnFocusOnClose: false,
      }}
    >
      {(triggerProps, disclosure, isHovering) => (
        <Input
          borderTop="2px solid"
          borderLeft="2px solid"
          borderRight="2px solid"
          borderBottom="0px solid"
          borderTopColor={disclosure.isOpen ? 'brand.100' : 'transparent'}
          borderLeftColor={disclosure.isOpen ? 'brand.100' : 'transparent'}
          borderRightColor={disclosure.isOpen ? 'brand.100' : 'transparent'}
          onBlur={() => !isHovering && disclosure.onClose()}
          borderBottomRadius={disclosure.isOpen ? 0 : 'md'}
          placeholder="Search @role"
          _focus={{
            shadow: 'none',
          }}
          {...triggerProps}
        />
      )}
    </SelectMenu>
  </VStack>
)
