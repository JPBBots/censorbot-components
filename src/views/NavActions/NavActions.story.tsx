import type { Meta } from '@storybook/react'
import { VStack } from '@chakra-ui/react'
import { action } from '@storybook/addon-actions'
import { NavActions } from '@/views/NavActions/NavActions'

export default {
  title: 'Views/NavActions',
  component: NavActions,
} as Meta

export const _LoggedOut = () => (
  <VStack>
    <NavActions
      actions={[
        { label: 'Support', onClick: action('onSupportClick') },
        { label: 'Dashboard', onClick: action('onDashboardClick') },
      ]}
      onLogin={action('onLogin')}
    />
  </VStack>
)

export const _LoggedIn = () => (
  <VStack>
    <NavActions
      user={{
        avatarUrl: 'https://via.placeholder.com/48x48',
      }}
      actions={[
        { label: 'Support', onClick: action('onSupportClick') },
        { label: 'Dashboard', onClick: action('onDashboardClick') },
      ]}
    />
  </VStack>
)
