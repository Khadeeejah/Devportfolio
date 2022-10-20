import { IconButton } from '@chakra-ui/react';

export function SocialLink({ icon, label, ...rest }) {
  return (
    <IconButton
      variant='ghost'
      aria-label={label}
      fontSize='xl'
      icon={icon}
      transition='all 0.3s'
      _hover={{ transform: `translateY(-4px)`, color: 'gray.700' }}
      {...rest}
    />
  );
}
