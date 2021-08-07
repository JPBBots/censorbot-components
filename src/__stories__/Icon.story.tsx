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
  <VStack spacing={4}>
    <Text>Icon Range</Text>
    <Wrap color="lighter.100" spacing={4}>
      <Icon as={FaSearch} boxSize={6} />
      <Icon as={FaChevronDown} boxSize={6} />
      <Icon as={FaCog} boxSize={6} />
      <Icon as={FaHashtag} boxSize={6} />
      <Icon as={FaAt} boxSize={6} />
      <Icon as={FaBan} boxSize={6} />
      <Icon as={FaCommentSlash} boxSize={6} />
      <Icon as={FaCrown} boxSize={6} />
      <Icon as={FaVial} boxSize={6} />
      <Icon as={FaRobot} boxSize={6} />
      <Icon as={FaLocationArrow} boxSize={6} />
      <Icon as={FaComments} boxSize={6} />
      <Icon as={FaCube} boxSize={6} />
      <Icon as={FaCode} boxSize={6} />
      <Icon as={FaFilter} boxSize={6} />
      <Icon as={FaTimes} boxSize={6} />
    </Wrap>
  </VStack>
)
