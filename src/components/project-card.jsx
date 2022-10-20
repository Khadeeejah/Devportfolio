import { Badge, Box, Flex, Heading, Stack, Text, Wrap } from '@chakra-ui/react';
import Image from 'next/future/image';
import { IoLogoGithub, IoMdLink } from 'react-icons/io';
import { CustomButton } from './custom-button';

export function ProjectCard({ tags, title, description, src, ...rest }) {
  return (
    <Box
      bg='white'
      as='article'
      borderRadius='3xl'
      overflow='hidden'
      border='1px'
      borderColor='gray.200'
      {...rest}
    >
      <Flex direction={{ base: 'column', sm: 'row' }}>
        <Box maxW='360px' w='100%'>
          <Image
            src={src}
            height={400}
            width={540}
            alt={title}
            style={{ objectFit: 'cover', height: '100%' }}
          />
        </Box>
        <Box px={{ base: '6', md: '12' }} py='40px'>
          <Heading as='h3' fontSize={{ base: '21px', md: '24px' }}>
            {title}
          </Heading>

          <Text mt={2} fontSize='md' color='gray.600'>
            {description}
          </Text>

          <Wrap mt={4} spacing='3'>
            {tags.map((tag, index) => (
              <Badge
                size='sm'
                colorScheme='gray'
                px='2'
                py='0.5'
                fontWeight='normal'
                textTransform='unset'
                fontSize='sm'
                key={index}
              >
                {tag}
              </Badge>
            ))}
          </Wrap>

          <Stack mt={6} spacing={4} isInline>
            <CustomButton
              href='#'
              icon={<IoMdLink />}
              colorScheme='blue'
              borderRadius='lg'
              color='white'
            >
              Visit Site
            </CustomButton>
            <CustomButton href='#' icon={<IoLogoGithub />} borderRadius='lg'>
              Github
            </CustomButton>
          </Stack>
        </Box>
      </Flex>
    </Box>
  );
}
