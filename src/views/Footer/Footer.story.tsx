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
            url: 'a',
          },
        ],
      },
      {
        label: 'Important Links',
        children: [
          {
            label: 'Privacy Policy',
            url: '',
          },
          {
            label: 'Terms of Service',
            url: '',
          },
          {
            label: 'Discord ToS',
            url: '',
          },
        ],
      },
      {
        label: 'Important Links',
        children: [
          {
            label: 'Privacy Policy',
            url: '',
          },
          {
            label: 'Terms of Service',
            url: '',
          },
          {
            label: 'Discord ToS',
            url: '',
          },
        ],
      },
    ]}
  />
)
