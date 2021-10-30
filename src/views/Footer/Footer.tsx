import { CensorBotIcon } from '@/views/Header/CensorBotIcon'
import { HStack, VStack, Text, Link } from '@chakra-ui/layout'

export interface FooterOptions {
  name: string
  copyrightYear: string
  companyName: string

  links: Array<{
    label: string
    children: Array<{ label: string; url: string }>
  }>
}

export const Footer = (props: FooterOptions) => {
  return (
    <HStack
      w="full"
      align="center"
      justify="space-around"
      wrap="wrap"
      padding={20}
    >
      <VStack textAlign="center">
        <HStack>
          <CensorBotIcon />
          <Text textStyle="heading.xl">{props.name}</Text>
        </HStack>
        <Text color="lighter.20">
          © Copyright {props.copyrightYear} {props.companyName} - All rights
          reserved
        </Text>
        <Text color="lighter.60">
          Made with{' '}
          <Text color="brand.100" display="contents">
            ❤
          </Text>{' '}
          by JPBBerry
        </Text>
      </VStack>

      <HStack w="half" align="flex-start" spacing="auto" wrap="wrap">
        {props.links.map((cat) => (
          <VStack align="flex-start" key={cat.label}>
            <Text color="lighter.60" textStyle="label.sm">
              {cat.label.toUpperCase()}
            </Text>
            {cat.children.map((link) => (
              <Link
                target="_blank"
                href={link.url}
                key={link.url}
                color="lighter.40"
              >
                {link.label}
              </Link>
            ))}
          </VStack>
        ))}
      </HStack>
    </HStack>
  )
}
