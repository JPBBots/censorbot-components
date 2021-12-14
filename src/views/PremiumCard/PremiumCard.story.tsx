import { Meta } from '@storybook/react'
import { HStack } from '@chakra-ui/react'
import { PremiumCard } from './PremiumCard'

export default {
  title: 'Views/Premium Card',
  component: PremiumCard,
} as Meta

export const _PremiumCard = () => (
  <HStack spacing={4} justify="center" align="stretch">
    <PremiumCard title="Premium" monthlyPrice={5} perks={['a', 'b']} />
    <PremiumCard
      title="Super Premium"
      monthlyPrice={10}
      perks={['a', 'b', 'c']}
    />
    <PremiumCard
      title="Own Instance"
      monthlyPrice={25}
      perks={[
        'd',
        'PremiumPerk.CustomAvatarUsername',
        'PremiumPerk.FeatureRequests',
      ]}
    />
  </HStack>
)
