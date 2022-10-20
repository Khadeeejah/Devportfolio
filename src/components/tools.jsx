import { Box, Image, SimpleGrid, Stack, Text, VStack } from '@chakra-ui/react';
import { toolsData } from './tools-data';

export function Tools({ title, src, bg, color, tool, ...rest }) {
  return (
    <SimpleGrid
      columns={{ base: '1', md: '2' }}
      spacing={{ base: '6', md: '12' }}
      pb='12'
      {...rest}
    >
      {toolsData.map((item, index) => {
        return (
          <Stack key={index} pb={{ base: '3', md: '6' }} spacing='8'>
            <Box bg='white' p='3' borderRadius='2xl' borderWidth='1px'>
              <Text fontWeight='bold' textAlign='center'>
                {item.title}
              </Text>
            </Box>
            <SimpleGrid columns={4} spacing='6'>
              {item.tools.map((item, index) => {
                return (
                  <VStack key={index}>
                    <Image
                      src={item.src}
                      boxSize='50px'
                      objectFit='contain'
                      alt={item.name}
                    />
                    <Text fontSize='sm' pt='1'>
                      {item.name}
                    </Text>
                  </VStack>
                );
              })}
            </SimpleGrid>
          </Stack>
        );
      })}
    </SimpleGrid>
  );
}
