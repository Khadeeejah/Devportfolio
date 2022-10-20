import { Box, Container } from '@chakra-ui/react';
import { About } from '../src/components/about';
import { Footer } from '../src/components/footer';
import { Projects } from '../src/components/projects';
import { Tooling } from '../src/components/tooling';
export default function Home() {
  return (
    <Box
      position='relative'
      backgroundImage='linear-gradient(70deg, rgb(248 228 260 / 24%) 0%, rgb(107 148 148 / 0%) 39%, rgb(166 236 250 / 13%) 100%);'
    >
      <Container maxW='container.lg' pt='16'>
        <About />
        <Projects />
        <Tooling />
        <Footer />
      </Container>
    </Box>
  );
}
