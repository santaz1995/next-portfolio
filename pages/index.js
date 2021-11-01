import {
  Link,
  Container,
  Heading,
  Box,
  Image,
  Button,
  List,
  ListItem,
  Icon,
  useColorModeValue
} from '@chakra-ui/react'
import Paragraph from '../components/paragraph'
import { BioSection, BioYear } from '../components/bio'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import {
  IoLogoLinkedin,
  IoLogoGithub,
} from 'react-icons/io5'

const Home = () => (
  <Layout>
    <Container>
      <Box
        borderRadius="lg"
        mb={6}
        p={3}
        textAlign="center"
        bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')}
      >
        Hello, I&apos;m a full-stack developer based in Ukraine!
      </Box>

      <Box display={{ md: 'flex' }}>
        <Box flexGrow={1}>
          <Heading as="h2" variant="page-title">
            Viacheslav Zheltukhin
          </Heading>
          <p>Full-stack Developer</p>
        </Box>
        <Box
          flexShrink={0}
          mt={{ base: 4, md: 0 }}
          ml={{ md: 6 }}
          textAlign="center"
        >
          <Image
            borderColor="whiteAlpha.800"
            borderWidth={2}
            borderStyle="solid"
            maxWidth="100px"
            display="inline-block"
            borderRadius="full"
            src="/images/viacheslav.jpg"
            alt="Profile image"
          />
        </Box>
      </Box>

      <Section delay={0.1}>
        <Heading as="h3" variant="section-title">
          About
        </Heading>
        <Paragraph>
          •	Full Stack (main backend) - 6+ years experience
        </Paragraph>
        <Paragraph>
          •	6+ years experience in troubleshooting
        </Paragraph>
        <Paragraph>
          •	6+ years experience in effective communication&cooperate with team
        </Paragraph>
        <Paragraph>
          •	Knowledge of web applications development process
        </Paragraph>
        <Paragraph>
          •	Extensive experience in implementing new technologies
        </Paragraph>
        <Paragraph>
          •	Experience working with a Agile methodologies
        </Paragraph>
        <Paragraph>
          •	Experience in working with project documentation
        </Paragraph>
        <Paragraph>
          •	Issue tracking systems
        </Paragraph>
      </Section>

      <Section delay={0.2}>
        <Heading as="h3" variant="section-title">
          Skills
        </Heading>
        <Paragraph>
          •	Php: (Laravel, Symfony, ApiPlatform)
        </Paragraph>
        <Paragraph>
          •	NodeJs: (Express, NestJs)
        </Paragraph>
        <Paragraph>
          •	Frontend: Html5, Css, Scss, Vuejs, Angular 1 - 4
        </Paragraph>
        <Paragraph>
          •	Micro-frontend: Stencil JSX, Vue - single-spa.js
        </Paragraph>
        <Paragraph>
          •	AWS: S3, SQS, SNS, ECS, EKS, ECR, AS IOT, DynamoDB
        </Paragraph>
        <Paragraph>
          •	Docker, WebSockets
        </Paragraph>
        <Paragraph>
          •	Database: MySQL, PostgreSQL, MongoDB, DocumentDB, DynamoDB
        </Paragraph>
        <Paragraph>
          •	Other: CQRS, EventSours, DDD, TDD, SOLID, DRY, KISS, YAGNI
        </Paragraph>
      </Section>

      <Section delay={0.3}>
        <Heading as="h3" variant="section-title">
          Experience
        </Heading>
        <BioSection>
          <BioYear>Dec 2018 - present</BioYear>
          Software Engineer at Brightgrove!
        </BioSection>
        <BioSection>
          <BioYear>Jun 2018 - Dec 2018</BioYear>
          Software Engineer at HoustonApps
        </BioSection>
        <BioSection>
          <BioYear>Jan 2017 - Jun 2018</BioYear>
          Fullstack developer at Entenso
        </BioSection>
        <BioSection>
          <BioYear>Sep 2016 - Jan 2017</BioYear>
          Php developer at Factor
        </BioSection>
        <BioSection>
          <BioYear>Nov 2014 - Sep 2016</BioYear>
          Php developer at Klassnaocinka and «ШО?!»
        </BioSection>
      </Section>

      <Section delay={0.4}>
        <Heading as="h3" variant="section-title">
          I ♥
        </Heading>
        <Paragraph>
          Game, Walk, Coding
        </Paragraph>
      </Section>

      <Section delay={0.5}>
        <Heading as="h3" variant="section-title">
          On the web
        </Heading>
        <List>
          <ListItem>
            <Link href="https://github.com/santaz1995" target="_blank">
              <Button
                variant="ghost"
                colorScheme="teal"
                leftIcon={<Icon as={IoLogoGithub} />}
              >
                @santaz
              </Button>
            </Link>
          </ListItem>
          <ListItem>
            <Link href="https://www.linkedin.com/in/viacheslav-zheltukhin-834802113/" target="_blank">
              <Button
                variant="ghost"
                colorScheme="teal"
                leftIcon={<Icon as={IoLogoLinkedin} />}
              >
                @viacheslav-zheltukhin
              </Button>
            </Link>
          </ListItem>
        </List>
      </Section>
    </Container>
  </Layout>
)

export default Home
