import Head from "next/head";
import NextLink from "next/link";
import { Fragment } from "react";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  Box,
  Checkbox,
  Flex,
  FormControl,
  FormLabel,
  Icon,
  Image,
  Input,
  SimpleGrid,
  GridItem,
  Table,
  TableContainer,
  Tbody,
  Td,
  Text,
  Textarea,
  Tr,
  VStack,
  SlideFade,
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
  emergingArchitectureSection,
  investorIntro,
  investorTypeOptions,
  limitationsSection,
  longReachSection,
  overviewSection,
  pcieSection,
  pcieWhyNowSection,
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

const inputStyles = {
  background: "transparent",
  border: "none",
  borderBottom: "2px solid",
  borderColor: "white",
  borderRadius: 0,
  color: "white",
  fontFamily: "'Nunito Sans', sans-serif",
  fontSize: "16px",
  h: "40px",
  px: 0,
  _hover: {
    borderColor: "electric.400",
  },
  _focusVisible: {
    borderColor: "electric.400",
    boxShadow: "none",
  },
  _placeholder: {
    color: "whiteAlpha.500",
    fontSize: "14px",
  },
};

const textareaStyles = {
  background: "transparent",
  border: "2px solid",
  borderColor: "white",
  borderRadius: "8px",
  color: "white",
  fontFamily: "'Nunito Sans', sans-serif",
  fontSize: "16px",
  h: "180px",
  px: 3,
  py: 3,
  _hover: {
    borderColor: "electric.400",
  },
  _focusVisible: {
    borderColor: "electric.400",
    boxShadow: "none",
  },
  _placeholder: {
    color: "whiteAlpha.500",
    fontSize: "14px",
  },
};

const labelStyles = {
  color: "white",
  fontSize: "16px",
  fontWeight: 700,
  mb: 3,
};

const TechBrief = () => {
  return (
    <>
      <Head>
        <title>Tech Brief | Accipiter Systems</title>
        <meta
          name="description"
          content="Investor information and technical brief content for Accipiter Systems."
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

        <Container>
          <VStack
            spacing={0}
            mt={{
              base: 10,
              md: 20,
            }}
          >
            <SlideFade in>
              <Text textAlign="center" variant="h1">
                Interested in Investing in
              </Text>
            </SlideFade>
            <SlideFade in delay={0.1}>
              <Text color="electric.400" textAlign="center" variant="h1">
                Accipiter Systems?
              </Text>
            </SlideFade>
          </VStack>

          <SimpleGrid
            alignItems="start"
            columns={{
              base: 1,
              xl: 2,
            }}
            columnGap={{
              base: 0,
              xl: 12,
            }}
            rowGap={8}
            mt={{
              base: 10,
              md: 14,
            }}
          >
            <GridItem>
              <VStack align="flex-start" spacing={6} w="100%">
                <Text
                  color="grey.800"
                  fontSize={{
                    base: "20px",
                    sm: "24px",
                    lg: "32px",
                  }}
                  fontWeight={500}
                  lineHeight={{
                    base: "32px",
                    sm: "36px",
                    lg: "44px",
                  }}
                  maxW="680px"
                >
                  {investorIntro.lead}
                </Text>
              </VStack>
            </GridItem>

            <GridItem>
              <SlideFade in delay={0.16}>
                <Box
                  background="grey.100"
                  borderRadius="24px"
                  borderTop="4px solid"
                  borderColor="electric.400"
                  boxShadow="0 18px 44px rgba(42, 62, 81, 0.08)"
                  p={{
                    base: 6,
                    md: 8,
                  }}
                  w="100%"
                >
                  <Text
                    color="grey.800"
                    fontSize={{
                      base: "18px",
                      sm: "20px",
                      lg: "24px",
                    }}
                    fontWeight={500}
                    lineHeight={{
                      base: "30px",
                      sm: "32px",
                      lg: "38px",
                    }}
                  >
                    {investorIntro.companyStatus}
                  </Text>
                </Box>
              </SlideFade>
            </GridItem>
          </SimpleGrid>

          <Text
            color="grey.800"
            maxW="820px"
            mt={8}
            mx="auto"
            textAlign="center"
            {...bodyTextProps}
          >
            {investorIntro.invitation}
          </Text>

          <Box
            background={colors.grey}
            border={`1px solid ${colors.blue}`}
            borderRadius="24px"
            boxShadow="0 24px 60px rgba(0, 0, 0, 0.16)"
            mt={{
              base: 14,
              md: 16,
            }}
            p={{
              base: 8,
              md: 10,
            }}
          >
            <Text
              color="white"
              fontSize={{
                base: "22px",
                md: "24px",
              }}
              fontWeight={700}
              lineHeight={{
                base: "30px",
                md: "32px",
              }}
            >
              Tell us about your interest.
            </Text>

            <Box as="form" mt={6} onSubmit={(event) => event.preventDefault()}>
              <SimpleGrid columns={{ base: 1, md: 2 }} gap={8}>
                <FormControl>
                  <FormLabel sx={labelStyles}>Name</FormLabel>
                  <Input placeholder="Your name" sx={inputStyles} />
                </FormControl>
                <FormControl>
                  <FormLabel sx={labelStyles}>Email</FormLabel>
                  <Input
                    placeholder="name@organization.com"
                    sx={inputStyles}
                    type="email"
                  />
                </FormControl>
                <FormControl>
                  <FormLabel sx={labelStyles}>
                    Organization / Investor Type
                  </FormLabel>
                  <Input
                    placeholder="Organization or investor type"
                    sx={inputStyles}
                  />
                </FormControl>
                <FormControl>
                  <FormLabel sx={labelStyles}>
                    Investment Interest Range
                  </FormLabel>
                  <Input placeholder="Example: $250k - $1M" sx={inputStyles} />
                </FormControl>
              </SimpleGrid>

              <Box mt={8}>
                <Text color="white" fontSize="16px" fontWeight={700}>
                  Optional:
                </Text>
                <SimpleGrid columns={{ base: 1, sm: 2 }} gap={4} mt={4}>
                  {investorTypeOptions.map((option) => (
                    <Checkbox
                      key={option}
                      color="white"
                      colorScheme="cyan"
                      size="md"
                      sx={{
                        ".chakra-checkbox__label": {
                          fontSize: "16px",
                        },
                      }}
                    >
                      {option}
                    </Checkbox>
                  ))}
                </SimpleGrid>
              </Box>

              <FormControl mt={8}>
                <FormLabel sx={labelStyles}>
                  Tell us about your interest
                </FormLabel>
                <Textarea
                  placeholder="Tell us about your interest"
                  resize="vertical"
                  sx={textareaStyles}
                />
              </FormControl>

              <Flex justify="flex-end" mt={8}>
                <HomeButton
                  disabled
                  style={{
                    minWidth: "200px",
                  }}
                >
                  Submit Interest
                </HomeButton>
              </Flex>
            </Box>
          </Box>

          <Box borderTop="1px solid" borderColor="grey.100" mt={10} pt={8}>
            <VStack spacing={5}>
              <Text
                color="grey.800"
                fontSize={{
                  base: "16px",
                  md: "18px",
                }}
                fontWeight={700}
                lineHeight={{
                  base: "28px",
                  md: "30px",
                }}
                maxW="920px"
                textAlign="center"
              >
                Investment opportunities are available only to accredited
                investors where applicable.
              </Text>
              <HomeButton
                disabled
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
                Download Investor Executive Summary
              </HomeButton>
            </VStack>
          </Box>
        </Container>

        <Box
          background="linear-gradient(135deg, #2A3E51 0%, #445766 100%)"
          mt={{
            base: 20,
            md: 24,
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
                        <Text key={bullet} color="grey.800" {...bodyTextProps}>
                          - {bullet}
                        </Text>
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

        <Box background="grey.100" py={{ base: 14, md: 20 }}>
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
            <Flex gap={8} justify="center" mt={12} wrap="wrap">
              {benefitsSection.items.map((item, index) => (
                <BenefitsCard
                  key={item.title}
                  number={index + 1}
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
            </Flex>
          </Box>
        </Container>

        <Box background="grey.100" py={{ base: 14, md: 20 }}>
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
                      borderRadius="22px"
                      boxShadow="0 10px 28px rgba(42, 62, 81, 0.04)"
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
                      borderColor="whiteAlpha.900"
                      borderRadius="28px"
                      boxShadow="0 18px 44px rgba(42, 62, 81, 0.06)"
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
                      borderRadius="22px"
                      boxShadow="0 10px 28px rgba(42, 62, 81, 0.04)"
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
                            <Text
                              key={item}
                              color="grey.800"
                              {...bodyTextProps}
                            >
                              - {item}
                            </Text>
                          ),
                        )}
                      </VStack>
                    </Box>

                    <Box
                      background="white"
                      borderRadius="22px"
                      boxShadow="0 10px 28px rgba(42, 62, 81, 0.04)"
                      p={{ base: 5, md: 6 }}
                      w="100%"
                    >
                      <Text
                        color="grey.800"
                        fontWeight={600}
                        {...bodyTextProps}
                      >
                        {emergingArchitectureSection.closing}
                      </Text>
                    </Box>
                  </VStack>
                </GridItem>
              </SimpleGrid>
            </VStack>
          </Container>
        </Box>

        <Box background="electric.900" py={{ base: 14, md: 20 }}>
          <Container>
            <VStack align="flex-start" spacing={5}>
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
              {conclusionSection.richParagraphs.map(
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
            </VStack>
          </Container>
        </Box>
      </article>
    </>
  );
};

export default TechBrief;
