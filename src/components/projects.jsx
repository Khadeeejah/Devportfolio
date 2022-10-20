import { Box, Heading, Stack } from '@chakra-ui/react';
import { ProjectCard } from './project-card';

export function Projects() {
  return (
    <Box as='section' py='12'>
      <Heading as='h2' size='lg' pb={{ base: '6', md: '12' }}>
        Projects
      </Heading>
      <Stack spacing='16'>
        <ProjectCard
          title='Daily Runs'
          description='Daily runs gives you quick information about the weather, traffic and activities going on around a specific area.'
          src='/assets/portfolio-1.jpeg'
          tags={['HTML', 'Chakra UI', 'Mongo DB', 'RedwoodJS']}
        />
        <ProjectCard
          title='Plish Spaces'
          description='Plish Spaces is a web and mobile platform that lets you track house spaces for vacation and short rentals.'
          src='/assets/portfolio-2.jpeg'
          tags={['HTML', 'CSS', 'React', 'Buildable']}
        />
        <ProjectCard
          title='Just 4 Devs'
          description='A site that provides various developer courses and teaches people how to code & land their first developer job.'
          src='/assets/portfolio-3.jpeg'
          tags={['NextJS', 'Chakra UI', 'PostgreSQL', 'NodeJS']}
        />
      </Stack>
    </Box>
  );
}
