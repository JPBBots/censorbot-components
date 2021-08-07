import { Meta } from '@storybook/react'
import { HStack } from '@chakra-ui/react'
import { GuildPreview } from '@/views/GuildPreview/GuildPreview'

export default {
  title: 'Views/Guild Preview',
  component: GuildPreview,
} as Meta

export const _GuildPreview = () => (
  <HStack spacing={4} justify="center">
    <GuildPreview
      guild={{
        name: "Xyoyu's Clubhouse",
        iconUrl:
          'https://cdn.discordapp.com/avatars/412994849168687105/99dd192697777b2a0dc1c83c727714e7.webp?size=128',
      }}
    />
    <GuildPreview guild={{ name: 'My Server' }} />
  </HStack>
)
