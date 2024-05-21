import Head from "next/head";
import NextLink from "next/link";
import client from "client";
import { PortableText } from "@portabletext/react";
import {
  Box,
  VStack,
  Link,
  Text,
  SlideFade,
  Image,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  Flex,
} from "@chakra-ui/react";

import Spacer from "components/Spacer";
import { Container } from "chakraComponents/Flex";
import { Container as OldContainer } from "components/Containers";

const ptComponents1 = {
  types: {
    block: ({ value }) => {
      return value.children.map((child) => {
        return (
          <Text
            fontSize={{
              base: "14px",
              sm: "16px",
            }}
            lineHeight={{
              base: "26px",
              sm: "32px",
            }}
          >
            {child.text}
          </Text>
        );
      });
    },
  },
};

const ptComponents2 = {
  types: {
    block: ({ value }) => {
      return value.children.map((child) => {
        return (
          <Text
            color="grey.800"
            fontSize={{
              base: "14px",
              sm: "16px",
            }}
            lineHeight={{
              base: "26px",
              sm: "32px",
            }}
          >
            {child.text}
          </Text>
        );
      });
    },
  },
};

const PhotonicProcessing: React.FC = ({
  photonicProcessingProps,
}: {
  [key: string]: any;
}) => {
  const slug = "photo-processing";
  const title = "Photonic Processing";

  const {
    pageHeading,
    pageSubheading,
    section1Heading,
    section1Paragraph1,
    section1Subheading,
    section1Paragraph2,
    section2Heading,
    section2Paragraph1,
  } = photonicProcessingProps;

  return (
    <>
      <Head>
        <title>
          Optical Switching and Photonic Processing | Accipiter Systems
        </title>
      </Head>
      <article>
        <Spacer size={"lg"} />
        <OldContainer>
          <Breadcrumb separator=">" spacing={4}>
            <BreadcrumbItem
              color="electric.400"
              fontWeight={600}
              _hover={{
                textDecoration: "underline",
              }}
            >
              <BreadcrumbLink as={NextLink} href="/">
                Home
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbItem
              color="electric.400"
              fontWeight={600}
              _hover={{
                textDecoration: "underline",
              }}
            >
              <BreadcrumbLink as={NextLink} href="/our-edge">
                Our Edge
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbItem
              color="electric.400"
              fontWeight={600}
              _hover={{
                textDecoration: "underline",
              }}
            >
              <BreadcrumbLink as={NextLink} href={`/our-edge/${slug}`}>
                {`${title.slice(0, 1).toUpperCase() + title.slice(1, 12)}${
                  title.length > 12 ? "..." : ""
                }`}
              </BreadcrumbLink>
            </BreadcrumbItem>
          </Breadcrumb>
        </OldContainer>
        <VStack
          spacing={0}
          mt={{
            base: 10,
            md: 20,
          }}
        >
          <SlideFade in>
            <Text variant="h1">{pageHeading}</Text>
          </SlideFade>
          <SlideFade in delay={0.1}>
            <Text align="center" color="electric.400" variant="h1">
              {pageSubheading}
            </Text>
          </SlideFade>
        </VStack>
        <Spacer size={"md"} />
        <Box background="electric.900" py={20}>
          <Container>
            <Text color="white" textAlign="center" variant="h1">
              {section1Heading}
            </Text>
          </Container>
        </Box>
        <Container>
          <Spacer size={"md"} />
          <PortableText value={section1Paragraph1} components={ptComponents1} />
          <Spacer size={"md"} />
          <Text
            align="center"
            color="electric.400"
            fontWeight={900}
            variant="h2"
          >
            {section1Subheading}
          </Text>
          <Spacer size={"md"} />
          <PortableText value={section1Paragraph2} components={ptComponents2} />
          {/* <Spacer size={"md"} /> */}
          {/* <Image src="/images/fabricZero.png" w="100%" /> */}
          <Spacer size={"md"} />
        </Container>
        <Box background="electric.900" py={20}>
          <Container>
            <Text color="white" textAlign="center" variant="h2">
              {section2Heading}
            </Text>
          </Container>
        </Box>
        <Container>
          <Spacer size={"md"} />
          <PortableText value={section2Paragraph1} components={ptComponents2} />
          <Spacer size={"md"} />
        </Container>
        <Container>
          <Box
            alignSelf="center"
            bgColor="grey.100"
            borderRadius="2xl"
            maxW="800px"
            minW={{
              base: "90%",
              lg: "800px",
            }}
            p={10}
          >
            <Text align="center" color="electric.400" variant="h2">
              Partners
            </Text>
            <Flex
              alignItems="center"
              direction={{
                base: "column",
                lg: "row",
              }}
              gap={10}
              mt={{
                base: 10,
                lg: 0,
              }}
            >
              <Image
                src="/images/pittLogo.png"
                borderRadius="100%"
                h={{
                  base: "150px",
                  lg: "200px",
                }}
                w={{
                  base: "150px",
                  lg: "200px",
                }}
              />
              <VStack alignItems="start">
                <Text>
                  University of Pittsburgh Swanson School of Engineering
                </Text>
                <Text>Youngblood Photonics Laboratory</Text>
                <Spacer size="sm" />
                <Text
                  as={Link}
                  href="https://www.engineering.pitt.edu/people/faculty/nathan-youngblood/"
                  isExternal
                  wordBreak="break-word"
                >
                  https://www.engineering.pitt.edu/people/faculty/nathan-youngblood/
                </Text>
                <Text
                  as={Link}
                  href="https://www.nature.com/articles/s41586-020-03070-1"
                  isExternal
                  wordBreak="break-word"
                >
                  https://www.nature.com/articles/s41586-020-03070-1
                </Text>
                <Text
                  as={Link}
                  href="https://pitt-photonics.github.io/"
                  isExternal
                  wordBreak="break-word"
                >
                  https://pitt-photonics.github.io/
                </Text>
              </VStack>
            </Flex>
          </Box>
        </Container>
        <Spacer size={"md"} />
      </article>
    </>
  );
};

export const getStaticProps = async () => {
  const photonicProcessingProps =
    await client.fetch(`*[_type == "ourTech" && slug.current == "photonic-processing"][0] {
      pageHeading,
      pageSubheading,
      section1Heading,
      section1Paragraph1,
      section1Subheading,
      section1Paragraph2,
      section2Heading,
      section2Paragraph1,
	}`);
  return {
    props: { photonicProcessingProps, revalidate: 10 },
  };
};

export default PhotonicProcessing;
