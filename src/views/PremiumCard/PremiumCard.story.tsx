import { Meta } from '@storybook/react'
import { HStack } from '@chakra-ui/react'
import { PremiumCard, PremiumPerk } from './PremiumCard'

export default {
  title: 'Views/Premium Card',
  component: PremiumCard,
} as Meta

export const _PremiumCard = () => (
  <HStack spacing={4} justify="center" align="start">
    <PremiumCard
      title="Premium"
      monthlyPrice={5}
      perks={[PremiumPerk.PremiumServers_3, PremiumPerk.PremiumSupport]}
    />
    <PremiumCard
      title="Super Premium"
      monthlyPrice={10}
      perks={[
        PremiumPerk.PremiumServers_6,
        PremiumPerk.PremiumSupport,
        PremiumPerk.BetaAccess,
      ]}
    />
    <PremiumCard
      title="Own Instance"
      monthlyPrice={25}
      perks={[
        PremiumPerk.IncludedHosting,
        PremiumPerk.CustomAvatarUsername,
        PremiumPerk.FeatureRequests,
      ]}
    />
  </HStack>
)
