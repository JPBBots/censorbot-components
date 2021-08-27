import type { Meta } from '@storybook/react'
import { InlineOptionGroup } from './InlineOptionGroup'
import { Box, Input, Text } from '@chakra-ui/react'
import { Tag } from '../Tag/Tag'
import { SelectMenu, SelectMenuOption } from '../SelectMenu/SelectMenu'
import { useState } from 'react'

export default {
  title: 'Views/InlineOptionGroup',
  component: InlineOptionGroup,
} as Meta

export const _InlineOptionGroup = () => {
  const [selected, setSelected] = useState('')

  const tags = {
    mods: (
      <Tag
        w="full"
        justifyContent="start"
        isRole
        label="Moderators"
        color="#ed4245"
        onClick={() => {
          setSelected(selected === 'mods' ? '' : 'mods')
        }}
        bg="transparent"
        _hover={{
          bg: 'lighter.5',
        }}
      />
    ),
    admins: (
      <Tag
        w="full"
        justifyContent="start"
        isRole
        label="Administrators"
        color="#3178c6"
        onClick={() => {
          setSelected(selected === 'admins' ? '' : 'admins')
        }}
        bg="transparent"
        _hover={{
          bg: 'lighter.5',
        }}
      />
    ),
  }

  const options: SelectMenuOption[] = [
    {
      name: 'mods',
      node: tags['mods'],
    },
    {
      name: 'admins',
      node: tags['admins'],
    },
  ]

  return (
    <InlineOptionGroup>
      <SelectMenu
        options={options}
        popoverProps={{
          autoFocus: false,
          matchWidth: true,
          gutter: 0,
          returnFocusOnClose: false,
        }}
      >
        {(triggerProps, disclosure, isHovering) => {
          const containerProps = {
            width: '320px',
            borderTop: '2px solid',
            borderLeft: '2px solid',
            borderRight: '2px solid',
            borderBottom: '0px solid',
            borderTopColor: disclosure.isOpen ? 'brand.100' : 'transparent',
            borderLeftColor: disclosure.isOpen ? 'brand.100' : 'transparent',
            borderRightColor: disclosure.isOpen ? 'brand.100' : 'transparent',
            borderBottomRadius: disclosure.isOpen ? 0 : 'md',
          }
          return selected ? (
            <Box p={2} borderTopRadius="md" bg="lighter.5" {...containerProps}>
              {tags[selected]}
            </Box>
          ) : (
            <Input
              {...containerProps}
              placeholder="Search @role"
              _focus={{
                shadow: 'none',
              }}
              {...triggerProps}
            />
          )
        }}
      </SelectMenu>
    </InlineOptionGroup>
  )
}
