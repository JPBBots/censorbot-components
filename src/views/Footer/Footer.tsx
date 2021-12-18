import { CensorBotIcon } from '@/views/Header/CensorBotIcon'
import { HStack, VStack, Text, Link, Flex } from '@chakra-ui/layout'

import { motion } from 'framer-motion'

export interface FooterOptions {
  name: string
  copyrightYear: string
  companyName: string

  links: Array<{
    label: string
    children: Array<{
      label: string
      url?: string
      onClick?: React.MouseEventHandler<HTMLAnchorElement>
    }>
  }>
}

export const Footer = (props: FooterOptions) => {
  return (
    <Flex
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
          <motion.div
            whileTap={{ cursor: 'grabbing' }}
            style={{
              display: 'inline-block',
              cursor: 'grab',
              userSelect: 'none',
            }}
            drag
            dragTransition={{
              bounceStiffness: 600,
              bounceDamping: 20,
            }}
            dragElastic={0.5}
            dragConstraints={{
              top: 0,
              right: 0,
              bottom: 0,
              left: 0,
            }}
          >
            <Text color="brand.100" display="contents">
              ❤
            </Text>
          </motion.div>{' '}
          by JPBBerry
        </Text>
      </VStack>

      <Flex
        w="half"
        align="flex-start"
        justify="space-between"
        gridGap="10px"
        wrap="wrap"
      >
        {props.links.map((cat) => (
          <VStack align="flex-start" key={cat.label}>
            <Text color="lighter.60" textStyle="label.sm">
              {cat.label.toUpperCase()}
            </Text>
            {cat.children.map((link) => (
              <Link
                target="_blank"
                href={link.url}
                onClick={link.onClick}
                key={link.url}
                color="lighter.40"
                cursor="pointer"
                _hover={{
                  color: 'lighter.60',
                  transition: '0.2s',
                }}
              >
                {link.label}
              </Link>
            ))}
          </VStack>
        ))}
      </Flex>
    </Flex>
  )
}
