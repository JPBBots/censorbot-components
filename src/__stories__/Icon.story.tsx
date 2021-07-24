import { Meta } from '@storybook/react'
import {
  FaAt,
  FaBan,
  FaChevronDown,
  FaCode,
  FaCog,
  FaComments,
  FaCommentSlash,
  FaCrown,
  FaCube,
  FaFilter,
  FaHashtag,
  FaLocationArrow,
  FaRobot,
  FaSearch,
  FaTimes,
  FaVial,
} from 'react-icons/fa'
import { VStack, Icon, Text, Wrap } from '@chakra-ui/react'

export default {
  title: 'Icons',
  component: Icon,
} as Meta

export const _Icons = () => (
  <VStack spacing="md">
    <Text>Icon Range</Text>
    <Wrap color="lighter.100" spacing="md">
      <Icon as={FaSearch} boxSize="md" />
      <Icon as={FaChevronDown} boxSize="md" />
      <Icon as={FaCog} boxSize="md" />
      <Icon as={FaHashtag} boxSize="md" />
      <Icon as={FaAt} boxSize="md" />
      <Icon as={FaBan} boxSize="md" />
      <Icon as={FaCommentSlash} boxSize="md" />
      <Icon as={FaCrown} boxSize="md" />
      <Icon as={FaVial} boxSize="md" />
      <Icon as={FaRobot} boxSize="md" />
      <Icon as={FaLocationArrow} boxSize="md" />
      <Icon as={FaComments} boxSize="md" />
      <Icon as={FaCube} boxSize="md" />
      <Icon as={FaCode} boxSize="md" />
      <Icon as={FaFilter} boxSize="md" />
      <Icon as={FaTimes} boxSize="md" />
    </Wrap>
  </VStack>
)
