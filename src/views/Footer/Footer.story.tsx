import { Meta } from '@storybook/react'
import { Footer } from './Footer'

export default {
  title: 'Views/Footer',
  component: Footer,
} as Meta

export const _Footer = () => (
  <Footer
    name="Censor Bot"
    companyName="JPBBots"
    copyrightYear="2017-2021"
    links={[
      {
        label: 'Contact Us',
        children: [
          {
            label: 'Discord Server',
            url: '/support',
          },
          {
            label: 'support@jpbbots.org',
            url: 'mailto:support@jpbbots.org',
          },
        ],
      },
      {
        label: 'Censor Bot',
        children: [
          {
            label: 'Invite',
            url: '/invite',
          },
          {
            label: 'Vote',
            url: '/vote',
          },
          {
            label: 'Review',
            url: '/review',
          },
          {
            label: 'Credits',
          },
        ],
      },
      {
        label: 'Important Links',
        children: [
          {
            label: 'Privacy Policy',
            url: '/privacy',
          },
          {
            label: 'Terms of Service',
            url: '/terms',
          },
          {
            label: 'Discord ToS',
            url: 'https://discord.com/terms',
          },
        ],
      },
    ]}
  />
)
