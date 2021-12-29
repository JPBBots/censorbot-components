import { Meta } from '@storybook/react'
import { Alert, AlertIcon, VStack } from '@chakra-ui/react'

export default {
  title: 'Alert',
  component: Alert,
} as Meta

export const _Alert = () => (
  <VStack>
    <Alert status="error">
      <AlertIcon />
      There was an error processing your request
    </Alert>

    <Alert status="success">
      <AlertIcon />
      Data uploaded to the server. Fire on!
    </Alert>

    <Alert status="warning">
      <AlertIcon />
      Seems your account is about expire, upgrade now
    </Alert>

    <Alert status="info">
      <AlertIcon />
      Chakra is going live on August 30th. Get ready!
    </Alert>
  </VStack>
)
