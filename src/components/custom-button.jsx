import { Button } from '@chakra-ui/react';

export function CustomButton({ icon, children, ...rest }) {
  return (
    <Button
      as='a'
      leftIcon={icon}
      size='md'
      transition='all 0.3s'
      _hover={{ transform: `translateY(-4px)` }}
      {...rest}
    >
      {children}
    </Button>
  );
}
