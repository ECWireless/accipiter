import Head from "next/head";
import NextLink from "next/link";
import { Fragment, ReactNode } from "react";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  Box,
  Flex,
  Icon,
  Image,
  SimpleGrid,
  GridItem,
  Table,
  TableContainer,
  Tbody,
  Td,
  Text,
  Tr,
  VStack,
} from "@chakra-ui/react";

import { Button as HomeButton } from "components/Buttons";
import Spacer from "components/Spacer";
import { colors } from "components/theme";
import { Container } from "chakraComponents/Flex";
import { Container as OldContainer } from "components/Containers";
import { BenefitsCard } from "views/home/OurEdge/components";
import {
  bandwidthSection,
  benefitsSection,
  conclusionSection,
  deepMemorySection,
  emergingArchitectureSection,
  limitationsSection,
  longReachSection,
  opticalProcessingSection,
  overviewSection,
  pcieSection,
  pcieWhyNowSection,
  securitySection,
  shiftSection,
  technicalBriefTitle,
} from "data/techBriefContent";

const bodyTextProps = {
  fontSize: {
    base: "14px",
    sm: "16px",
  },
  lineHeight: {
    base: "26px",
    sm: "32px",
  },
};

type RichTextSegment = {
  bold?: boolean;
  text: string;
};

const renderInlineSegments = (segments: RichTextSegment[]) =>
  segments.map((segment, segmentIndex) => (
    <Text
      as="span"
      display="inline"
      fontWeight={segment.bold ? 700 : 400}
      key={segmentIndex}
    >
      {segment.text}
    </Text>
  ));

const AccentBulletItem = ({ children }: { children: ReactNode }) => (
  <Flex align="flex-start" gap={3}>
    <Box
      background="electric.400"
      borderRadius="full"
      flexShrink={0}
      h="7px"
      mt={{
        base: "10px",
        sm: "12px",
      }}
      w="7px"
    />
    <Text color="grey.800" flex="1" {...bodyTextProps}>
      {children}
    </Text>
  </Flex>
);

const SectionHeading = ({ children }: { children: ReactNode }) => (
  <Text
    color="electric.400"
    fontSize={{
      base: "26px",
      md: "32px",
    }}
    fontWeight={600}
  >
    {children}
  </Text>
);

const RichParagraphs = ({
  paragraphs,
}: {
  paragraphs: RichTextSegment[][];
}) => (
  <VStack align="stretch" spacing={5}>
    {paragraphs.map((paragraph, paragraphIndex) => (
      <Text key={paragraphIndex} color="grey.800" {...bodyTextProps}>
        {renderInlineSegments(paragraph)}
      </Text>
    ))}
  </VStack>
);

const ImageCard = ({
  alt,
  src,
  title,
}: {
  alt: string;
  src: string;
  title?: string;
}) => (
  <Box
    background="white"
    border="1px solid"
    borderColor="grey.100"
    borderRadius="28px"
    boxShadow="0 18px 44px rgba(42, 62, 81, 0.08)"
    overflow="hidden"
    p={{
      base: 4,
      md: 5,
    }}
    w="100%"
  >
    {title ? (
      <Text color="grey.800" fontWeight={700} mb={4} {...bodyTextProps}>
        {title}
      </Text>
    ) : null}
    <Box borderRadius="24px" overflow="hidden">
      <Image alt={alt} display="block" src={src} w="100%" />
    </Box>
  </Box>
);

const PlainFeatureCard = ({
  children,
  title,
}: {
  children: ReactNode;
  title: string;
}) => (
  <Box
    background="white"
    border="1px solid"
    borderColor="grey.100"
    borderRadius="22px"
    boxShadow="0 12px 32px rgba(42, 62, 81, 0.05)"
    h="100%"
    p={{ base: 5, md: 6 }}
  >
    <Text color="grey.800" fontWeight={700} {...bodyTextProps}>
      {title}
    </Text>
    <Box mt={4}>{children}</Box>
  </Box>
);

const TechBrief = () => {
  const conclusionLeadParagraphs = conclusionSection.richParagraphs.slice(0, -1);
  const conclusionCalloutParagraph =
    conclusionSection.richParagraphs[conclusionSection.richParagraphs.length - 1];

  return (
    <>
      <Head>
        <title>Tech Brief | Accipiter Systems</title>
        <meta
          name="description"
          content="Technical brief content for Accipiter Systems."
        />
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
              <BreadcrumbLink as={NextLink} href="/tech-brief">
                Tech Brief
              </BreadcrumbLink>
            </BreadcrumbItem>
          </Breadcrumb>
        </OldContainer>

        <Box
          background="linear-gradient(135deg, #2A3E51 0%, #445766 100%)"
          mt={{
            base: 10,
            md: 12,
          }}
          py={{
            base: 16,
            md: 20,
          }}
        >
          <Container>
            <VStack align="flex-start" spacing={0}>
              <Text
                color="white"
                fontSize={{
                  base: "28px",
                  md: "40px",
                  xl: "52px",
                }}
                fontWeight={600}
                lineHeight={{
                  base: "38px",
                  md: "50px",
                  xl: "62px",
                }}
              >
                Technical Brief: {technicalBriefTitle}
              </Text>
            </VStack>
          </Container>
        </Box>

        <Container>
          <Box py={{ base: 14, md: 20 }}>
            <Text
              color="electric.400"
              fontSize={{
                base: "26px",
                md: "32px",
              }}
              fontWeight={600}
            >
              {overviewSection.heading}
            </Text>
            <Box mt={5}>
              <Box
                background="grey.100"
                borderRadius="24px"
                boxShadow="0 18px 44px rgba(42, 62, 81, 0.08)"
                float={{
                  base: "none",
                  lg: "right",
                }}
                maxW={{
                  base: "100%",
                  lg: "360px",
                  xl: "400px",
                }}
                mb={6}
                ml={{
                  base: 0,
                  lg: 10,
                }}
                mt={{
                  base: 0,
                  lg: 2,
                }}
                overflow="hidden"
                p={{
                  base: 6,
                  md: 8,
                }}
                w="100%"
              >
                <Text
                  color="grey.400"
                  fontSize="12px"
                  fontWeight={700}
                  letterSpacing="0.14em"
                  textTransform="uppercase"
                >
                  Modern System Requirements
                </Text>
                <VStack align="stretch" mt={6} spacing={3}>
                  {overviewSection.highlights.map((highlight) => (
                    <Box
                      key={highlight}
                      background="white"
                      borderLeft="4px solid"
                      borderColor="electric.400"
                      borderRadius="16px"
                      p={5}
                    >
                      <Text
                        color="grey.800"
                        fontSize={{
                          base: "18px",
                          md: "20px",
                        }}
                        fontWeight={600}
                      >
                        {highlight}
                      </Text>
                    </Box>
                  ))}
                </VStack>
              </Box>

              <VStack align="stretch" spacing={5}>
                {overviewSection.richParagraphs.map(
                  (paragraph, paragraphIndex) => (
                    <Text
                      key={paragraphIndex}
                      color="grey.800"
                      {...bodyTextProps}
                    >
                      {paragraph.map((segment, segmentIndex) => (
                        <Text
                          as="span"
                          display="inline"
                          fontWeight={segment.bold ? 700 : 400}
                          key={`${paragraphIndex}-${segmentIndex}`}
                        >
                          {segment.text}
                        </Text>
                      ))}
                    </Text>
                  ),
                )}
              </VStack>
              <Box sx={{ clear: "both" }} />
            </Box>
          </Box>
        </Container>

        <Box background="grey.100" py={{ base: 14, md: 20 }}>
          <Container>
            <SimpleGrid
              alignItems="start"
              columns={{ base: 1, xl: 12 }}
              gap={{ base: 10, xl: 10 }}
            >
              <GridItem colSpan={{ base: 1, xl: 6 }}>
                <VStack align="flex-start" spacing={5}>
                  <Text
                    color="electric.400"
                    fontSize={{
                      base: "26px",
                      md: "32px",
                    }}
                    fontWeight={600}
                  >
                    {shiftSection.heading}
                  </Text>
                  {shiftSection.richParagraphs.map(
                    (paragraph, paragraphIndex) => (
                      <Text
                        key={paragraphIndex}
                        color="grey.800"
                        {...bodyTextProps}
                      >
                        {renderInlineSegments(paragraph)}
                      </Text>
                    ),
                  )}
                  <Text
                    color="grey.800"
                    fontWeight={600}
                    mt={1}
                    {...bodyTextProps}
                  >
                    AI workloads have evolved from:
                  </Text>
                  <VStack align="stretch" spacing={4} pt={1} w="100%">
                    {shiftSection.evolution.map((item, index) => (
                      <Box
                        key={`${item.from}-${item.to}`}
                        background="white"
                        border="1px solid"
                        borderColor="grey.100"
                        borderRadius="16px"
                        boxShadow="0 8px 22px rgba(42, 62, 81, 0.05)"
                        p={{ base: 3, md: 4 }}
                      >
                        <Flex
                          align={{ base: "stretch", md: "center" }}
                          direction={{ base: "column", md: "row" }}
                          gap={{ base: 3, md: 4 }}
                        >
                          <Flex
                            align="center"
                            background="rgba(22, 180, 220, 0.10)"
                            borderRadius="full"
                            color="electric.400"
                            fontSize="11px"
                            fontWeight={700}
                            h="26px"
                            justify="center"
                            letterSpacing="0.12em"
                            minW="26px"
                            px={1.5}
                            flexShrink={0}
                            textTransform="uppercase"
                          >
                            0{index + 1}
                          </Flex>
                          <Box flex="1">
                            <Text
                              color="grey.400"
                              fontSize="10px"
                              fontWeight={700}
                              letterSpacing="0.08em"
                              textTransform="uppercase"
                            >
                              From
                            </Text>
                            <Text
                              color="grey.800"
                              fontSize={{ base: "15px", md: "16px" }}
                              fontWeight={600}
                              lineHeight={{ base: "22px", md: "25px" }}
                              mt={1}
                            >
                              {item.from}
                            </Text>
                          </Box>
                          <Flex
                            align="center"
                            justify={{ base: "flex-start", md: "center" }}
                            minW={{ base: "auto", md: "28px" }}
                            flexShrink={0}
                          >
                            <Icon
                              boxSize={{ base: "18px", md: "22px" }}
                              color="electric.400"
                              viewBox="0 0 20 20"
                            >
                              <path
                                d="M3 10H15M15 10L10 5M15 10L10 15"
                                fill="none"
                                stroke="currentColor"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2.2"
                              />
                            </Icon>
                          </Flex>
                          <Box
                            alignSelf={{ base: "auto", md: "stretch" }}
                            background="grey.200"
                            borderRadius="full"
                            flexShrink={0}
                            h={{ base: "1px", md: "auto" }}
                            w={{ base: "100%", md: "1px" }}
                          />
                          <Box flex="1">
                            <Text
                              color="grey.400"
                              fontSize="10px"
                              fontWeight={700}
                              letterSpacing="0.08em"
                              textTransform="uppercase"
                            >
                              To
                            </Text>
                            <Text
                              color="grey.800"
                              fontSize={{ base: "15px", md: "16px" }}
                              fontWeight={600}
                              lineHeight={{ base: "22px", md: "25px" }}
                              mt={1}
                            >
                              {item.to}
                            </Text>
                          </Box>
                        </Flex>
                      </Box>
                    ))}
                  </VStack>
                </VStack>
              </GridItem>

              <GridItem colSpan={{ base: 1, xl: 6 }}>
                <VStack align="flex-start" spacing={5}>
                  <Box
                    background="white"
                    border="1px solid"
                    borderColor="white"
                    borderRadius="28px"
                    boxShadow="0 18px 48px rgba(42, 62, 81, 0.08)"
                    overflow="hidden"
                    p={{
                      base: 4,
                      md: 6,
                    }}
                    position="relative"
                    w="100%"
                  >
                    <Box borderRadius="28px" overflow="hidden">
                      <Image
                        alt="AI Workloads Are Changing"
                        display="block"
                        src="/images/tech-brief/ai-workloads-changing.png"
                        w="100%"
                      />
                    </Box>
                  </Box>
                  <Box
                    background="rgba(255, 255, 255, 0.72)"
                    border="1px solid"
                    borderColor="whiteAlpha.700"
                    borderRadius="28px"
                    boxShadow="0 12px 32px rgba(42, 62, 81, 0.05)"
                    p={{ base: 6, md: 8 }}
                    w="100%"
                  >
                    <Text color="grey.800" {...bodyTextProps}>
                      {shiftSection.examplesIntro}
                    </Text>
                    <SimpleGrid
                      columns={{ base: 1, md: 2 }}
                      gap={3}
                      mt={6}
                      w="100%"
                    >
                      {shiftSection.examples.map((example) => (
                        <Box
                          key={example}
                          background="white"
                          borderLeft="4px solid"
                          borderColor="electric.400"
                          borderRadius="16px"
                          boxShadow="0 8px 20px rgba(42, 62, 81, 0.04)"
                          px={5}
                          py={4}
                        >
                          <Text color="grey.800">{example}</Text>
                        </Box>
                      ))}
                    </SimpleGrid>
                    <Box
                      borderLeft="4px solid"
                      borderColor="electric.400"
                      mt={6}
                      pl={5}
                    >
                      <Text
                        color="grey.800"
                        fontWeight={600}
                        {...bodyTextProps}
                      >
                        {renderInlineSegments(shiftSection.closingSegments)}
                      </Text>
                    </Box>
                  </Box>
                </VStack>
              </GridItem>
            </SimpleGrid>
          </Container>
        </Box>

        <Container>
          <Box py={{ base: 14, md: 20 }}>
            <Text
              color="electric.400"
              fontSize={{
                base: "26px",
                md: "32px",
              }}
              fontWeight={600}
            >
              {limitationsSection.heading}
            </Text>
            <Text color="grey.800" mt={5} {...bodyTextProps}>
              {renderInlineSegments(limitationsSection.introSegments)}
            </Text>

            <VStack align="stretch" mt={10} spacing={{ base: 8, md: 10 }}>
              <Box
                maxW={{
                  base: "100%",
                  xl: "680px",
                }}
                mx="auto"
                w="100%"
              >
                <Box
                  background="grey.100"
                  borderRadius="28px"
                  overflow="hidden"
                  p={{
                    base: 4,
                    md: 5,
                  }}
                >
                  <Box borderRadius="28px" overflow="hidden">
                    <Image
                      alt="Why Traditional Networks Fall Short"
                      display="block"
                      src="/images/tech-brief/traditional-networks-fall-short.png"
                      w="100%"
                    />
                  </Box>
                </Box>
              </Box>
              <SimpleGrid columns={{ base: 1, md: 2 }} gap={5}>
                {limitationsSection.items.map((item, index) => (
                  <Box
                    key={item.title}
                    background="white"
                    border="1px solid"
                    borderColor="grey.100"
                    borderRadius="24px"
                    boxShadow="0 16px 40px rgba(0, 0, 0, 0.05)"
                    p={{ base: 5, md: 6 }}
                  >
                    <Text color="electric.400" fontSize="12px" fontWeight={700}>
                      0{index + 1}
                    </Text>
                    <Text
                      color="grey.800"
                      fontSize={{
                        base: "18px",
                        md: "20px",
                      }}
                      fontWeight={600}
                      lineHeight={{
                        base: "28px",
                        md: "30px",
                      }}
                      mt={2}
                    >
                      {item.title}
                    </Text>
                    <Text color="grey.800" mt={4} {...bodyTextProps}>
                      {item.summary}
                    </Text>
                    <VStack align="stretch" mt={4} spacing={2}>
                      {item.bullets.map((bullet) => (
                        <AccentBulletItem key={bullet}>{bullet}</AccentBulletItem>
                      ))}
                    </VStack>
                    <Text color="grey.800" mt={4} {...bodyTextProps}>
                      {renderInlineSegments(item.closingSegments)}
                    </Text>
                  </Box>
                ))}
              </SimpleGrid>
            </VStack>
          </Box>
        </Container>

        <Box background="electric.900" py={{ base: 14, md: 20 }}>
          <Container>
            <SimpleGrid columns={{ base: 1, xl: 2 }} gap={12}>
              <VStack align="flex-start" spacing={5}>
                <Text
                  color="white"
                  fontSize={{
                    base: "26px",
                    md: "32px",
                  }}
                  fontWeight={600}
                >
                  {bandwidthSection.heading}
                </Text>
                <Text color="whiteAlpha.900" {...bodyTextProps}>
                  {bandwidthSection.intro}
                </Text>
                <Flex
                  align="center"
                  direction="row"
                  columnGap={0}
                  justify="flex-start"
                  rowGap={3}
                  wrap="wrap"
                >
                  {bandwidthSection.speeds.map((speed, index) => (
                    <Fragment key={speed}>
                      <Box
                        background="whiteAlpha.200"
                        border="1px solid"
                        borderColor="whiteAlpha.300"
                        borderRadius="full"
                        minW={{
                          base: "88px",
                          md: "88px",
                        }}
                        px={4}
                        py={2.5}
                        textAlign="center"
                      >
                        <Text color="white" fontWeight={700}>
                          {speed}
                        </Text>
                      </Box>
                      {index < bandwidthSection.speeds.length - 1 && (
                        <Flex
                          align="center"
                          flexShrink={0}
                          justify="center"
                          w={{
                            base: "22px",
                            md: "24px",
                          }}
                        >
                          <Icon
                            boxSize="16px"
                            color="electric.100"
                            viewBox="0 0 20 20"
                          >
                            <path
                              d="M3 10H15M15 10L10 5M15 10L10 15"
                              fill="none"
                              stroke="currentColor"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2.2"
                            />
                          </Icon>
                        </Flex>
                      )}
                    </Fragment>
                  ))}
                </Flex>
                <Text color="whiteAlpha.900" {...bodyTextProps}>
                  {renderInlineSegments(bandwidthSection.followupSegments)}
                </Text>
              </VStack>

              <Box
                background="whiteAlpha.100"
                border="1px solid"
                borderColor="whiteAlpha.200"
                borderRadius="28px"
                p={{
                  base: 8,
                  md: 10,
                }}
              >
                <Text
                  color="whiteAlpha.900"
                  fontWeight={600}
                  mb={5}
                  {...bodyTextProps}
                >
                  {bandwidthSection.issuesHeading}
                </Text>
                <VStack align="stretch" spacing={4}>
                  {bandwidthSection.issues.map((issue) => (
                    <Box
                      key={issue}
                      background="whiteAlpha.100"
                      borderRadius="16px"
                      px={5}
                      py={4}
                    >
                      <Text color="white" fontWeight={600}>
                        {issue}
                      </Text>
                    </Box>
                  ))}
                </VStack>
                <Text color="whiteAlpha.900" mt={6} {...bodyTextProps}>
                  {renderInlineSegments(bandwidthSection.closingSegments)}
                </Text>
              </Box>
            </SimpleGrid>
          </Container>
        </Box>

        <Container>
          <Box py={{ base: 14, md: 20 }}>
            <SimpleGrid
              alignItems="start"
              columns={{ base: 1, xl: 12 }}
              gap={{ base: 10, xl: 10 }}
            >
              <GridItem colSpan={{ base: 1, xl: 5 }}>
                <VStack align="stretch" spacing={6}>
                  <Text
                    color="electric.400"
                    fontSize={{
                      base: "26px",
                      md: "32px",
                    }}
                    fontWeight={600}
                  >
                    {pcieSection.heading}
                  </Text>
                  <Text color="grey.800" {...bodyTextProps}>
                    {renderInlineSegments(pcieSection.introSegments)}
                  </Text>
                  <Box
                    background="grey.100"
                    border="1px solid"
                    borderColor="grey.100"
                    borderRadius="24px"
                    p={{ base: 5, md: 6 }}
                  >
                    <Text color="grey.800" fontWeight={600} {...bodyTextProps}>
                      {pcieSection.devicesIntro}
                    </Text>
                    <SimpleGrid
                      columns={{ base: 1, sm: 2 }}
                      gap={3}
                      mt={5}
                      w="100%"
                    >
                      {pcieSection.devices.map((device, index) => (
                        <GridItem
                          colSpan={{
                            base: 1,
                            sm:
                              pcieSection.devices.length % 2 === 1 &&
                              index === pcieSection.devices.length - 1
                                ? 2
                                : 1,
                          }}
                          key={device}
                        >
                          <Box
                            background="white"
                            border="1px solid"
                            borderColor="grey.100"
                            borderRadius="16px"
                            minH="60px"
                            px={5}
                            py={4}
                          >
                            <Text color="grey.800" fontWeight={600}>
                              {device}
                            </Text>
                          </Box>
                        </GridItem>
                      ))}
                    </SimpleGrid>
                  </Box>
                </VStack>
              </GridItem>

              <GridItem colSpan={{ base: 1, xl: 7 }}>
                <VStack align="stretch" spacing={5}>
                  <Box
                    background="grey.100"
                    border="1px solid"
                    borderColor="grey.100"
                    borderRadius="28px"
                    boxShadow="0 16px 36px rgba(42, 62, 81, 0.05)"
                    p={{ base: 5, md: 6 }}
                    w="100%"
                  >
                    <Box
                      borderRadius="24px"
                      maxW="360px"
                      mx="auto"
                      overflow="hidden"
                    >
                      <Image
                        alt="PCIe on motherboard"
                        display="block"
                        src="/images/tech-brief/pcie-on-motherboard.png"
                        w="100%"
                      />
                    </Box>
                  </Box>
                  <Box
                    background="white"
                    border="1px solid"
                    borderColor="grey.100"
                    borderRadius="28px"
                    boxShadow="0 16px 36px rgba(42, 62, 81, 0.05)"
                    p={{ base: 6, md: 8 }}
                  >
                    <Text color="grey.800" {...bodyTextProps}>
                      {renderInlineSegments(
                        pcieSection.characteristicsIntroSegments,
                      )}
                    </Text>
                    <SimpleGrid
                      columns={{ base: 1, sm: 2 }}
                      gap={3}
                      mt={6}
                      w="100%"
                    >
                      {pcieSection.characteristics.map(
                        (characteristic, index) => (
                          <GridItem
                            colSpan={{
                              base: 1,
                              sm:
                                pcieSection.characteristics.length % 2 === 1 &&
                                index === pcieSection.characteristics.length - 1
                                  ? 2
                                  : 1,
                            }}
                            key={characteristic}
                          >
                            <Box
                              background="grey.100"
                              border="1px solid"
                              borderColor="grey.100"
                              borderRadius="16px"
                              minH="60px"
                              px={5}
                              py={4}
                            >
                              <Text color="grey.800" fontWeight={600}>
                                {characteristic}
                              </Text>
                            </Box>
                          </GridItem>
                        ),
                      )}
                    </SimpleGrid>
                    <Text color="grey.800" mt={6} {...bodyTextProps}>
                      {pcieSection.closing}
                    </Text>
                  </Box>
                </VStack>
              </GridItem>
            </SimpleGrid>
          </Box>
        </Container>

        <Box
          background="linear-gradient(180deg, #EEF3F6 0%, #F8FAFC 100%)"
          py={{ base: 14, md: 20 }}
        >
          <Container>
            <Text
              color="electric.400"
              fontSize={{
                base: "26px",
                md: "32px",
              }}
              fontWeight={600}
            >
              {pcieWhyNowSection.heading}
            </Text>
            <Text color="grey.800" mt={5} {...bodyTextProps}>
              {pcieWhyNowSection.intro}
            </Text>
            <VStack align="stretch" mt={10} spacing={6}>
              <Box
                background="white"
                border="1px solid"
                borderColor="grey.100"
                borderRadius="24px"
                boxShadow="0 16px 40px rgba(0, 0, 0, 0.05)"
                p={6}
              >
                <Text
                  color="grey.800"
                  fontSize={{
                    base: "20px",
                    md: "22px",
                  }}
                  fontWeight={600}
                >
                  {pcieWhyNowSection.items[0].title}
                </Text>
                <Text color="grey.800" mt={4} {...bodyTextProps}>
                  {renderInlineSegments(
                    pcieWhyNowSection.items[0].bodySegments,
                  )}
                </Text>
                {"detail" in pcieWhyNowSection.items[0] &&
                pcieWhyNowSection.items[0].detail ? (
                  <Text
                    color="grey.800"
                    fontWeight={600}
                    mt={5}
                    {...bodyTextProps}
                  >
                    {pcieWhyNowSection.items[0].detail}
                  </Text>
                ) : null}
              </Box>

              <Box
                background="white"
                border="1px solid"
                borderColor="grey.100"
                borderRadius="24px"
                boxShadow="0 16px 40px rgba(0, 0, 0, 0.05)"
                overflow="hidden"
                p={{ base: 4, md: 5 }}
              >
                <TableContainer overflowX="auto">
                  <Table minW="1000px" variant="unstyled">
                    <Tbody>
                      <Tr>
                        <Td
                          border="1px solid"
                          borderColor="#1E2430"
                          colSpan={3}
                          p={0}
                        />
                        <Td
                          background="#F7E7B6"
                          border="1px solid"
                          borderColor="#1E2430"
                          colSpan={3}
                          fontSize={{
                            base: "18px",
                            md: "20px",
                          }}
                          fontWeight={500}
                          lineHeight="1.1"
                          p={2}
                          textAlign="center"
                        >
                          {pcieWhyNowSection.performanceDemandedToday.title}
                        </Td>
                        <Td
                          border="1px solid"
                          borderColor="#1E2430"
                          colSpan={3}
                          p={0}
                        />
                      </Tr>
                      <Tr>
                        <Td
                          background="#3E62A4"
                          border="1px solid"
                          borderColor="#1E2430"
                          color="white"
                          fontSize={{
                            base: "18px",
                            md: "20px",
                          }}
                          fontWeight={700}
                          lineHeight="1.1"
                          minW="220px"
                          p={2.5}
                          whiteSpace="nowrap"
                        >
                          PCIe Generation
                        </Td>
                        {pcieWhyNowSection.performanceDemandedToday.columns.map(
                          (column) => (
                            <Td
                              background={
                                column.highlighted ? "#F7E7B6" : "#DCE8F4"
                              }
                              border="1px solid"
                              borderColor="#1E2430"
                              color="#111111"
                              fontSize={{
                                base: "16px",
                                md: "18px",
                              }}
                              fontWeight={700}
                              key={column.generation}
                              lineHeight="1.1"
                              minW="96px"
                              p={2.5}
                              textAlign="center"
                              whiteSpace="nowrap"
                            >
                              {column.generation}
                            </Td>
                          ),
                        )}
                      </Tr>
                      <Tr>
                        <Td
                          background="#3E62A4"
                          border="1px solid"
                          borderColor="#1E2430"
                          color="white"
                          fontSize={{
                            base: "16px",
                            md: "18px",
                          }}
                          fontWeight={700}
                          lineHeight="1.1"
                          p={2.5}
                          whiteSpace="nowrap"
                        >
                          Specification Released
                        </Td>
                        {pcieWhyNowSection.performanceDemandedToday.columns.map(
                          (column) => (
                            <Td
                              background={
                                column.highlighted ? "#FDF3CF" : "white"
                              }
                              border="1px solid"
                              borderColor="#1E2430"
                              color="#111111"
                              fontSize={{
                                base: "15px",
                                md: "16px",
                              }}
                              fontWeight={500}
                              key={`${column.generation}-released`}
                              lineHeight="1.1"
                              p={2.5}
                              textAlign="center"
                              whiteSpace="nowrap"
                            >
                              {column.released}
                            </Td>
                          ),
                        )}
                      </Tr>
                      <Tr>
                        <Td
                          background="#3E62A4"
                          border="1px solid"
                          borderColor="#1E2430"
                          color="white"
                          fontSize={{
                            base: "16px",
                            md: "18px",
                          }}
                          fontWeight={700}
                          lineHeight="1.1"
                          p={2.5}
                          whiteSpace="nowrap"
                        >
                          Total Bandwidth (x16)
                        </Td>
                        {pcieWhyNowSection.performanceDemandedToday.columns.map(
                          (column) => (
                            <Td
                              background={
                                column.highlighted ? "#FDF3CF" : "white"
                              }
                              border="1px solid"
                              borderColor="#1E2430"
                              color="#111111"
                              fontSize={{
                                base: "15px",
                                md: "16px",
                              }}
                              fontWeight={500}
                              key={`${column.generation}-bandwidth`}
                              lineHeight="1.1"
                              p={2.5}
                              textAlign="center"
                              whiteSpace="nowrap"
                            >
                              {column.bandwidth}
                            </Td>
                          ),
                        )}
                      </Tr>
                    </Tbody>
                  </Table>
                </TableContainer>
              </Box>

              <SimpleGrid columns={{ base: 1, md: 2 }} gap={6}>
                {pcieWhyNowSection.items.slice(1).map((item) => (
                  <Box
                    key={item.title}
                    background="white"
                    border="1px solid"
                    borderColor="grey.100"
                    borderRadius="24px"
                    boxShadow="0 16px 40px rgba(0, 0, 0, 0.05)"
                    p={6}
                  >
                    <Text
                      color="grey.800"
                      fontSize={{
                        base: "20px",
                        md: "22px",
                      }}
                      fontWeight={600}
                    >
                      {item.title}
                    </Text>
                    <Text color="grey.800" mt={4} {...bodyTextProps}>
                      {renderInlineSegments(item.bodySegments)}
                    </Text>
                  </Box>
                ))}
              </SimpleGrid>
            </VStack>
          </Container>
        </Box>

        <Box background="electric.900" py={{ base: 14, md: 20 }}>
          <Container>
            <SimpleGrid columns={{ base: 1, xl: 2 }} gap={12}>
              <VStack align="flex-start" spacing={5}>
                <Text
                  color="white"
                  fontSize={{
                    base: "26px",
                    md: "32px",
                  }}
                  fontWeight={600}
                >
                  {longReachSection.heading}
                </Text>
                {longReachSection.richParagraphs.map(
                  (paragraph, paragraphIndex) => (
                    <Text
                      key={paragraphIndex}
                      color="whiteAlpha.900"
                      {...bodyTextProps}
                    >
                      {renderInlineSegments(paragraph)}
                    </Text>
                  ),
                )}
                <SimpleGrid columns={{ base: 1, sm: 2 }} gap={4} w="100%">
                  {longReachSection.capabilities.map((capability) => (
                    <Box
                      key={capability}
                      background="whiteAlpha.100"
                      borderRadius="18px"
                      px={5}
                      py={4}
                    >
                      <Text color="white" fontWeight={600}>
                        {capability}
                      </Text>
                    </Box>
                  ))}
                </SimpleGrid>
                <Text color="whiteAlpha.900" {...bodyTextProps}>
                  {renderInlineSegments(longReachSection.closingSegments)}
                </Text>
              </VStack>

              <Box
                background="white"
                borderRadius="28px"
                overflow="hidden"
                p={{
                  base: 4,
                  md: 6,
                }}
              >
                <Box borderRadius="28px" overflow="hidden">
                  <Image
                    alt="Emerging compute fabric model"
                    display="block"
                    src="/images/tech-brief/emerging-compute-fabric.png"
                    w="100%"
                  />
                </Box>
              </Box>
            </SimpleGrid>
          </Container>
        </Box>

        <Container>
          <Box py={{ base: 14, md: 20 }}>
            <Text
              color="electric.400"
              fontSize={{
                base: "26px",
                md: "32px",
              }}
              fontWeight={600}
            >
              {benefitsSection.heading}
            </Text>
            <Text color="grey.800" mt={5} {...bodyTextProps}>
              {benefitsSection.intro}
            </Text>
            <VStack
              align="stretch"
              mt={12}
              mx="auto"
              spacing={8}
              w="100%"
              maxW={{
                base: "100%",
                lg: "64%",
              }}
            >
              {benefitsSection.items.map((item, index) => (
                <BenefitsCard
                  key={item.title}
                  number={index + 1}
                  numberPosition="center"
                  width="100%"
                  text={
                    <>
                      <Text as="span" fontWeight={700}>
                        {item.title}
                      </Text>
                      {`: ${item.body}`}
                    </>
                  }
                />
              ))}
            </VStack>
          </Box>
        </Container>

        <Box background="grey.100" py={{ base: 14, md: 20 }}>
          <Container>
            <SimpleGrid
              alignItems="start"
              columns={{ base: 1, xl: 12 }}
              gap={{ base: 10, xl: 10 }}
            >
              <GridItem colSpan={{ base: 1, xl: 5 }}>
                <VStack align="stretch" spacing={5}>
                  <SectionHeading>{securitySection.heading}</SectionHeading>
                  <RichParagraphs paragraphs={securitySection.richParagraphs} />
                </VStack>
              </GridItem>

              <GridItem colSpan={{ base: 1, xl: 7 }}>
                <ImageCard
                  alt="Why Long-Reach PCIe reduces exposure to zero-day attacks"
                  src="/images/tech-brief/zero-day-attack-surface.png"
                />
              </GridItem>
            </SimpleGrid>

            <SimpleGrid
              alignItems="stretch"
              columns={{ base: 1, lg: 2 }}
              gap={5}
              mt={10}
            >
              {securitySection.items.map((item, index) => {
                const isLastOddItem =
                  securitySection.items.length % 2 === 1 &&
                  index === securitySection.items.length - 1;

                return (
                  <GridItem
                    colSpan={{
                      base: 1,
                      lg: isLastOddItem ? 2 : 1,
                    }}
                    h="100%"
                    key={item.title}
                  >
                    <PlainFeatureCard title={item.title}>
                      <VStack align="stretch" spacing={4}>
                        {item.paragraphs.map((paragraph, paragraphIndex) => (
                          <Text
                            key={`${item.title}-paragraph-${paragraphIndex}`}
                            color="grey.800"
                            {...bodyTextProps}
                          >
                            {renderInlineSegments(paragraph)}
                          </Text>
                        ))}
                        <VStack align="stretch" spacing={2}>
                          {item.bullets.map((bullet) => (
                            <AccentBulletItem key={bullet}>
                              {bullet}
                            </AccentBulletItem>
                          ))}
                        </VStack>
                        {item.secondaryIntro ? (
                          <Text color="grey.800" {...bodyTextProps}>
                            {item.secondaryIntro}
                          </Text>
                        ) : null}
                        {item.secondaryBullets ? (
                          <VStack align="stretch" spacing={2}>
                            {item.secondaryBullets.map((bullet) => (
                              <AccentBulletItem key={bullet}>
                                {bullet}
                              </AccentBulletItem>
                            ))}
                          </VStack>
                        ) : null}
                        {item.closingParagraphs?.map(
                          (paragraph, paragraphIndex) => (
                            <Text
                              key={`${item.title}-closing-${paragraphIndex}`}
                              color="grey.800"
                              {...bodyTextProps}
                            >
                              {renderInlineSegments(paragraph)}
                            </Text>
                          ),
                        )}
                      </VStack>
                    </PlainFeatureCard>
                  </GridItem>
                );
              })}
            </SimpleGrid>

            <Box
              background="white"
              border="1px solid"
              borderColor="grey.100"
              borderRadius="24px"
              boxShadow="0 16px 40px rgba(0, 0, 0, 0.05)"
              mt={10}
              overflow="hidden"
              p={{ base: 4, md: 5 }}
            >
              <TableContainer overflowX="auto">
                <Table minW="760px" variant="unstyled">
                  <Tbody>
                    <Tr>
                      <Td
                        background="#DCE8F4"
                        border="2px solid"
                        borderColor="#111111"
                        color="#111111"
                        fontSize={{
                          base: "18px",
                          md: "22px",
                        }}
                        fontWeight={700}
                        lineHeight="1.1"
                        p={2.5}
                        w="42%"
                      >
                        Capability
                      </Td>
                      <Td
                        background="#DCE8F4"
                        border="2px solid"
                        borderColor="#111111"
                        color="#111111"
                        fontSize={{
                          base: "18px",
                          md: "22px",
                        }}
                        fontWeight={700}
                        lineHeight="1.1"
                        p={2.5}
                        textAlign="center"
                        whiteSpace="nowrap"
                      >
                        Traditional LAN
                      </Td>
                      <Td
                        background="#DCE8F4"
                        border="2px solid"
                        borderColor="#111111"
                        color="#111111"
                        fontSize={{
                          base: "18px",
                          md: "22px",
                        }}
                        fontWeight={700}
                        lineHeight="1.1"
                        p={2.5}
                        textAlign="center"
                        whiteSpace="nowrap"
                      >
                        Long-Reach PCIe
                      </Td>
                    </Tr>
                    {securitySection.comparisonRows.map((row) => (
                      <Tr key={row.capability}>
                        <Td
                          border="2px solid"
                          borderColor="#111111"
                          color="#111111"
                          fontSize={{
                            base: "17px",
                            md: "20px",
                          }}
                          fontWeight={700}
                          lineHeight="1.1"
                          p={2.5}
                        >
                          {row.capability}
                        </Td>
                        <Td
                          border="2px solid"
                          borderColor="#111111"
                          color="#111111"
                          fontSize={{
                            base: "17px",
                            md: "20px",
                          }}
                          fontWeight={400}
                          lineHeight="1.1"
                          p={2.5}
                          textAlign="center"
                        >
                          {row.traditionalLan}
                        </Td>
                        <Td
                          border="2px solid"
                          borderColor="#111111"
                          color="#111111"
                          fontSize={{
                            base: "17px",
                            md: "20px",
                          }}
                          fontWeight={400}
                          lineHeight="1.1"
                          p={2.5}
                          textAlign="center"
                        >
                          {row.longReachPcie}
                        </Td>
                      </Tr>
                    ))}
                  </Tbody>
                </Table>
              </TableContainer>
            </Box>

            <SimpleGrid columns={{ base: 1, xl: 12 }} gap={8} mt={10}>
              <GridItem colSpan={{ base: 1, xl: 12 }}>
                <PlainFeatureCard title={securitySection.implications.title}>
                  <VStack align="stretch" spacing={4}>
                    {securitySection.implications.paragraphs.map(
                      (paragraph, paragraphIndex) => (
                        <Text
                          key={`implications-${paragraphIndex}`}
                          color="grey.800"
                          {...bodyTextProps}
                        >
                          {renderInlineSegments(paragraph)}
                        </Text>
                      ),
                    )}
                    <VStack align="stretch" spacing={2}>
                      {securitySection.implications.bullets.map((bullet) => (
                        <AccentBulletItem key={bullet}>{bullet}</AccentBulletItem>
                      ))}
                    </VStack>
                    <Text color="grey.800" {...bodyTextProps}>
                      {renderInlineSegments(
                        securitySection.implications.closingSegments,
                      )}
                    </Text>
                    <VStack align="stretch" spacing={2}>
                      {securitySection.implications.closingBullets.map(
                        (bullet) => (
                          <AccentBulletItem key={bullet}>
                            {bullet}
                          </AccentBulletItem>
                        ),
                      )}
                    </VStack>
                  </VStack>
                </PlainFeatureCard>
              </GridItem>
            </SimpleGrid>
          </Container>
        </Box>

        <Container>
          <Box py={{ base: 14, md: 20 }}>
            <SimpleGrid
              alignItems="start"
              columns={{ base: 1, xl: 12 }}
              gap={{ base: 10, xl: 10 }}
            >
              <GridItem colSpan={{ base: 1, xl: 6 }}>
                <VStack align="stretch" spacing={5}>
                  <SectionHeading>{deepMemorySection.heading}</SectionHeading>
                  <Text color="grey.800" {...bodyTextProps}>
                    {deepMemorySection.intro}
                  </Text>
                  <VStack align="stretch" spacing={2}>
                    {deepMemorySection.examples.map((example) => (
                      <AccentBulletItem key={example}>{example}</AccentBulletItem>
                    ))}
                  </VStack>
                  <Text color="grey.800" {...bodyTextProps}>
                    {renderInlineSegments(deepMemorySection.demandSegments)}
                  </Text>
                </VStack>
              </GridItem>

              <GridItem colSpan={{ base: 1, xl: 6 }}>
                <ImageCard
                  alt="Deep Memory Recording Ethernet versus PCIe Fabric"
                  src="/images/tech-brief/deep-memory-recording.png"
                  title={deepMemorySection.imageTitle}
                />
              </GridItem>
            </SimpleGrid>

            <SimpleGrid columns={{ base: 1, xl: 2 }} gap={6} mt={10}>
              <PlainFeatureCard title={deepMemorySection.limitations.title}>
                <VStack align="stretch" spacing={4}>
                  <Text color="grey.800" {...bodyTextProps}>
                    {deepMemorySection.limitations.intro}
                  </Text>
                  <VStack align="stretch" spacing={2}>
                    {deepMemorySection.limitations.bullets.map((bullet) => (
                      <AccentBulletItem key={bullet}>{bullet}</AccentBulletItem>
                    ))}
                  </VStack>
                  <Text color="grey.800" {...bodyTextProps}>
                    {deepMemorySection.limitations.constraintsIntro}
                  </Text>
                  <VStack align="stretch" spacing={2}>
                    {deepMemorySection.limitations.constraints.map((bullet) => (
                      <AccentBulletItem key={bullet}>
                        <Text as="span" display="inline" fontWeight={700}>
                          {bullet}
                        </Text>
                      </AccentBulletItem>
                    ))}
                  </VStack>
                  <Text color="grey.800" {...bodyTextProps}>
                    {deepMemorySection.limitations.closing}
                  </Text>
                </VStack>
              </PlainFeatureCard>

              <PlainFeatureCard title={deepMemorySection.pcieBased.title}>
                <VStack align="stretch" spacing={4}>
                  {deepMemorySection.pcieBased.paragraphs.map((paragraph) => (
                    <Text key={paragraph} color="grey.800" {...bodyTextProps}>
                      {paragraph}
                    </Text>
                  ))}
                  <VStack align="stretch" spacing={2}>
                    {deepMemorySection.pcieBased.bullets.map((bullet, index) => (
                      <AccentBulletItem key={index}>
                        {renderInlineSegments(bullet)}
                      </AccentBulletItem>
                    ))}
                  </VStack>
                  <Text color="grey.800" {...bodyTextProps}>
                    {deepMemorySection.pcieBased.closing}
                  </Text>
                </VStack>
              </PlainFeatureCard>
            </SimpleGrid>

            <Text color="grey.800" fontWeight={700} mt={10} {...bodyTextProps}>
              {deepMemorySection.advantagesHeading}
            </Text>
            <SimpleGrid columns={{ base: 1, md: 2, xl: 3 }} gap={5} mt={5}>
              {deepMemorySection.advantages.map((advantage) => (
                <PlainFeatureCard key={advantage.title} title={advantage.title}>
                  <Text color="grey.800" {...bodyTextProps}>
                    {advantage.body}
                  </Text>
                </PlainFeatureCard>
              ))}
            </SimpleGrid>
          </Box>
        </Container>

        <Box background="grey.100" py={{ base: 14, md: 20 }}>
          <Container>
            <VStack align="stretch" spacing={10}>
              <SimpleGrid
                alignItems="start"
                columns={{ base: 1, xl: 12 }}
                gap={{ base: 10, xl: 10 }}
              >
                <GridItem colSpan={{ base: 1, xl: 6 }}>
                  <VStack align="stretch" spacing={5}>
                    <SectionHeading>
                      {opticalProcessingSection.heading}
                    </SectionHeading>
                    <Text color="grey.800" {...bodyTextProps}>
                      {renderInlineSegments(
                        opticalProcessingSection.introSegments,
                      )}
                    </Text>
                    <Text color="grey.800" fontWeight={600} {...bodyTextProps}>
                      {opticalProcessingSection.examplesIntro}
                    </Text>
                    <VStack align="stretch" spacing={2}>
                      {opticalProcessingSection.examples.map((example) => (
                        <AccentBulletItem key={example}>
                          {example}
                        </AccentBulletItem>
                      ))}
                    </VStack>
                  </VStack>
                </GridItem>

                <GridItem colSpan={{ base: 1, xl: 6 }}>
                  <ImageCard
                    alt="Optical Processing Pipeline LAN versus PCIe Fabric"
                    src="/images/tech-brief/optical-processing-pipeline.png"
                    title={opticalProcessingSection.imageTitle}
                  />
                </GridItem>
              </SimpleGrid>

              <SimpleGrid columns={{ base: 1, xl: 2 }} gap={6}>
                <PlainFeatureCard title={opticalProcessingSection.challenges.title}>
                  <VStack align="stretch" spacing={4}>
                    <Text color="grey.800" {...bodyTextProps}>
                      {opticalProcessingSection.challenges.intro}
                    </Text>
                    <VStack align="stretch" spacing={2}>
                      {opticalProcessingSection.challenges.bullets.map(
                        (bullet) => (
                          <AccentBulletItem key={bullet}>
                            {bullet}
                          </AccentBulletItem>
                        ),
                      )}
                    </VStack>
                    <Text color="grey.800" {...bodyTextProps}>
                      {renderInlineSegments(
                        opticalProcessingSection.challenges.closingSegments,
                      )}
                    </Text>
                  </VStack>
                </PlainFeatureCard>

                <PlainFeatureCard title={opticalProcessingSection.pcieBackbone.title}>
                  <VStack align="stretch" spacing={4}>
                    {opticalProcessingSection.pcieBackbone.paragraphs.map(
                      (paragraph) => (
                        <Text key={paragraph} color="grey.800" {...bodyTextProps}>
                          {paragraph}
                        </Text>
                      ),
                    )}
                    <VStack align="stretch" spacing={2}>
                      {opticalProcessingSection.pcieBackbone.bullets.map(
                        (bullet) => (
                          <AccentBulletItem key={bullet}>
                            {bullet}
                          </AccentBulletItem>
                        ),
                      )}
                    </VStack>
                    <Text color="grey.800" {...bodyTextProps}>
                      {opticalProcessingSection.pcieBackbone.closing}
                    </Text>
                  </VStack>
                </PlainFeatureCard>
              </SimpleGrid>

              <Box>
                <Text color="grey.800" fontWeight={700} {...bodyTextProps}>
                  {opticalProcessingSection.advantagesHeading}
                </Text>
                <SimpleGrid columns={{ base: 1, md: 2, xl: 3 }} gap={5} mt={5}>
                  {opticalProcessingSection.advantages.map((advantage) => (
                    <PlainFeatureCard
                      key={advantage.title}
                      title={advantage.title}
                    >
                      <Text color="grey.800" {...bodyTextProps}>
                        {advantage.body}
                      </Text>
                    </PlainFeatureCard>
                  ))}
                </SimpleGrid>
              </Box>

              <Box
                background="white"
                borderLeft="4px solid"
                borderColor="electric.400"
                borderRadius="22px"
                boxShadow="0 12px 32px rgba(42, 62, 81, 0.05)"
                p={{ base: 5, md: 6 }}
              >
                <Text color="grey.800" fontWeight={600} {...bodyTextProps}>
                  {renderInlineSegments(opticalProcessingSection.closingSegments)}
                </Text>
              </Box>
            </VStack>
          </Container>
        </Box>

        <Box
          background="linear-gradient(180deg, #EEF3F6 0%, #F8FAFC 100%)"
          py={{ base: 14, md: 20 }}
        >
          <Container>
            <VStack align="flex-start" spacing={8}>
              <VStack align="flex-start" maxW="720px" spacing={5}>
                <Text
                  color="electric.400"
                  fontSize={{
                    base: "26px",
                    md: "32px",
                  }}
                  fontWeight={600}
                >
                  {emergingArchitectureSection.heading}
                </Text>
                <Text color="grey.800" {...bodyTextProps}>
                  {emergingArchitectureSection.intro}
                </Text>
              </VStack>

              <SimpleGrid
                alignItems="start"
                columns={{ base: 1, xl: 12 }}
                gap={{ base: 8, xl: 10 }}
                w="100%"
              >
                <GridItem colSpan={{ base: 1, xl: 6 }}>
                  <VStack align="stretch" spacing={5}>
                    <Box
                      background="white"
                      border="1px solid"
                      borderRadius="22px"
                      borderColor="grey.100"
                      borderLeft="4px solid"
                      borderLeftColor="electric.400"
                      boxShadow="0 16px 40px rgba(0, 0, 0, 0.05)"
                      p={{ base: 5, md: 6 }}
                      w="100%"
                    >
                      <Text color="grey.800" fontWeight={700}>
                        {emergingArchitectureSection.insideRackTitle}
                      </Text>
                      <Text color="grey.800" mt={3} {...bodyTextProps}>
                        {emergingArchitectureSection.insideRackBody}
                      </Text>
                    </Box>

                    <Box
                      background="white"
                      border="1px solid"
                      borderColor="white"
                      borderRadius="28px"
                      boxShadow="0 18px 44px rgba(42, 62, 81, 0.08)"
                      overflow="hidden"
                      p={{ base: 4, md: 5 }}
                      w="100%"
                    >
                      <Box borderRadius="24px" overflow="hidden">
                        <Image
                          alt="Enabling deterministic AI infrastructure"
                          display="block"
                          src="/images/tech-brief/deterministic-ai-infrastructure.png"
                          w="100%"
                        />
                      </Box>
                    </Box>
                  </VStack>
                </GridItem>

                <GridItem colSpan={{ base: 1, xl: 6 }}>
                  <VStack align="stretch" spacing={5}>
                    <Box
                      background="white"
                      border="1px solid"
                      borderRadius="22px"
                      borderColor="grey.100"
                      boxShadow="0 16px 40px rgba(0, 0, 0, 0.05)"
                      p={{ base: 5, md: 6 }}
                      w="100%"
                    >
                      <Text color="grey.800" fontWeight={700}>
                        {emergingArchitectureSection.outsideRackTitle}
                      </Text>
                      <Text color="grey.800" mt={3} {...bodyTextProps}>
                        {emergingArchitectureSection.outsideRackIntro}
                      </Text>
                      <VStack align="stretch" mt={4} spacing={2}>
                        {emergingArchitectureSection.outsideRackItems.map(
                          (item) => (
                            <AccentBulletItem key={item}>{item}</AccentBulletItem>
                          ),
                        )}
                      </VStack>
                    </Box>

                    <Box
                      background="white"
                      border="1px solid"
                      borderColor="grey.100"
                      borderRadius="22px"
                      boxShadow="0 12px 32px rgba(42, 62, 81, 0.05)"
                      p={{ base: 5, md: 6 }}
                      w="100%"
                    >
                      <Box borderLeft="4px solid" borderColor="electric.400" pl={5}>
                        <Text
                          color="grey.800"
                          fontWeight={600}
                          {...bodyTextProps}
                        >
                          {emergingArchitectureSection.closing}
                        </Text>
                      </Box>
                    </Box>
                  </VStack>
                </GridItem>
              </SimpleGrid>
            </VStack>
          </Container>
        </Box>

        <Box background="electric.900" py={{ base: 14, md: 20 }}>
          <Container>
            <VStack align="flex-start" spacing={8}>
              <Text
                color="white"
                fontSize={{
                  base: "26px",
                  md: "32px",
                }}
                fontWeight={600}
              >
                {conclusionSection.heading}
              </Text>

              <SimpleGrid
                alignItems="start"
                columns={{ base: 1, xl: 12 }}
                gap={{ base: 8, xl: 10 }}
                w="100%"
              >
                <GridItem colSpan={{ base: 1, xl: 7 }}>
                  <VStack align="stretch" spacing={5}>
                    {conclusionLeadParagraphs.map((paragraph, paragraphIndex) => (
                      <Text
                        key={paragraphIndex}
                        color="whiteAlpha.900"
                        maxW="960px"
                        {...bodyTextProps}
                      >
                        {renderInlineSegments(paragraph)}
                      </Text>
                    ))}
                  </VStack>
                </GridItem>

                <GridItem colSpan={{ base: 1, xl: 5 }}>
                  <Box
                    background="rgba(255, 255, 255, 0.08)"
                    border="1px solid"
                    borderColor="rgba(22, 180, 220, 0.24)"
                    borderRadius="28px"
                    boxShadow="0 18px 44px rgba(10, 18, 28, 0.18)"
                    p={{ base: 6, md: 8 }}
                  >
                    <Box borderLeft="4px solid" borderColor="electric.400" pl={5}>
                      <Text
                        color="white"
                        fontSize={{
                          base: "20px",
                          md: "24px",
                        }}
                        fontWeight={600}
                        lineHeight={{
                          base: "34px",
                          md: "40px",
                        }}
                      >
                        {renderInlineSegments(conclusionCalloutParagraph)}
                      </Text>
                    </Box>
                  </Box>
                </GridItem>
              </SimpleGrid>

              <Box borderTop="1px solid" borderColor="whiteAlpha.200" pt={8} w="100%">
                <VStack spacing={4} w="100%">
                  <HomeButton
                    as="a"
                    download="Accipiter-Systems-Technical-Brief.pdf"
                    href="/accipiter-technical-brief.pdf"
                    style={{
                      background: "#F4FBFD",
                      border: `2px solid ${colors.blue}`,
                      boxShadow: "none",
                      color: colors.blue,
                      maxWidth: "100%",
                      minWidth: "0",
                      opacity: 1,
                      padding: "14px 28px",
                    }}
                  >
                    Download Technical Brief
                  </HomeButton>
                </VStack>
              </Box>
            </VStack>
          </Container>
        </Box>
      </article>
    </>
  );
};

export default TechBrief;
