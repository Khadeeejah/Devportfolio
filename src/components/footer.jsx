import { Box, Container, Link, Stack, Text, Wrap } from '@chakra-ui/react';
import { CustomButton } from './custom-button';
import { footerData } from './footer-links-data';

export function Footer() {
  return (
    <Box as='footer' p='4'>
      <Container maxW='container.lg'>
        <Stack
          direction={{ base: 'column', lg: 'row' }}
          alignItems='center'
          justify='space-between'
          flex='1'
          spacing={{ base: '4', md: '12' }}
        >
          <Text>
            Made with ❤️ by{' '}
            <Link href='https://twitter.com/_estheragbaje' isExternal>
              Esther Agbaje
            </Link>{' '}
            © 2022
          </Text>

          <Wrap justify='center'>
            {footerData.map((item, index) => {
              return (
                <CustomButton
                  key={index}
                  fontWeight='normal'
                  href={item.href}
                  variant='ghost'
                  icon={item.icon}
                  borderRadius='lg'
                  _hover={{ textDecoration: 'underline' }}
                >
                  {item.name}
                </CustomButton>
              );
            })}
          </Wrap>
        </Stack>
      </Container>
    </Box>
  );
}
