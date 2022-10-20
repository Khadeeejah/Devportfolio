import { Box, Heading } from '@chakra-ui/react';
import { Tools } from './tools';

export function Tooling() {
  return (
    <Box as='section' pt='12' pb='20'>
      <Heading as='h2' size='lg' pb={{ base: '6', md: '8' }}>
        Tooling
      </Heading>
      <Tools />
    </Box>
  );
}
