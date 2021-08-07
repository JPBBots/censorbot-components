import { Meta } from '@storybook/react'
import { Header } from '@/views/Header/Header'
import { _LoggedOut as _NavActions } from '@/views/NavActions/NavActions.story'

export default {
  title: 'Views/Header',
  component: Header,
} as Meta

export const _Header = () => (
  <Header title="Censor Bot">
    <_NavActions />
  </Header>
)
