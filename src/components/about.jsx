/* eslint-disable react/no-unescaped-entities */
import {
  Avatar,
  Box,
  Heading,
  HStack,
  List,
  ListIcon,
  ListItem,
  Stack,
  Text,
} from '@chakra-ui/react';
import {
  BsFileCodeFill,
  BsGithub,
  BsLinkedin,
  BsStarFill,
  BsTwitter,
} from 'react-icons/bs';
import { MdMail } from 'react-icons/md';
import { AiFillApi } from 'react-icons/ai';
import { SocialLink } from './social-link';

export function About() {
  return (
    <Stack as='section' spacing='10' pb='8'>
      <Stack
        direction={{ base: 'column', md: 'row' }}
        spacing={{ base: '6', md: '2' }}
      >
        <HStack spacing='8' flex='1'>
          <Avatar
            boxShadow='lg'
            size='xl'
            name='Joke Basmin'
            src='https://images.unsplash.com/photo-1611432579699-484f7990b127?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80'
          />
          <Stack spacing='1'>
            <Heading as='h1' size='lg' color='blue.600'>
              Joke Basmin
            </Heading>
            <Text fontSize='lg' color='gray.500'>
              Full Stack Developer
            </Text>
          </Stack>
        </HStack>

        <HStack spacing='2'>
          <SocialLink label='Email' icon={<MdMail />} href='#' />
          <SocialLink label='Twitter' icon={<BsTwitter />} href='#' />
          <SocialLink label='LinkedIn' icon={<BsLinkedin />} href='#' />
          <SocialLink label='Github' icon={<BsGithub />} href='#' />
        </HStack>
      </Stack>

      <Text fontSize='lg' lineHeight='tall'>
        Over 4 years experience working on both frontend and backend development
        processes. Excelled in designing user interactions on websites,
        developing servers, APIs and databases.
      </Text>

      <Box>
        <Heading fontSize='sm' textTransform='uppercase' pb='3'>
          Career Highlights
        </Heading>
        <Stack spacing='2'>
          <List spacing={2}>
            <ListItem>
              <ListIcon as={BsStarFill} color='blue.500' />
              First-class Master's degree in Computer Science
            </ListItem>
            <ListItem>
              <ListIcon as={BsFileCodeFill} color='blue.500' />
              Expert in developing responsive User Interfaces
            </ListItem>
            <ListItem>
              <ListIcon as={AiFillApi} color='blue.500' />
              Proficient in producing and consuming RESTful APIs
            </ListItem>
          </List>
        </Stack>
      </Box>
    </Stack>
  );
}
