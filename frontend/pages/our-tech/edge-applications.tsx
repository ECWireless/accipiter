import Head from "next/head";
import { Box, VStack, Flex, Text, SlideFade } from "@chakra-ui/react";

import Spacer from "components/Spacer";
import { Container } from "chakraComponents/Flex";
import { SwitchSVG } from "components/SwitchSvg";

const EdgeApplications: React.FC = () => {
  return (
    <>
      <Head>
        <title>Edge Applications | Accipiter Systems</title>
      </Head>
      <article>
        <VStack
          spacing={0}
          mt={{
            base: 20,
            md: 48,
            lg: 52,
          }}
        >
          <SlideFade in>
            <Text variant="h1">FalconX</Text>
          </SlideFade>
          <SlideFade in delay={0.1}>
            <Text color="electric.400" variant="h1">
              Edge Applications
            </Text>
          </SlideFade>
        </VStack>
        <Container>
          <Flex
            flexDirection={{ base: "column", xl: "row" }}
            gap={{
              base: 20,
              xl: 10,
            }}
            mt={{
              base: 10,
              lg: 20,
            }}
          >
            <VStack
              align="flex-start"
              width={{
                base: "100%",
                xl: "60%",
              }}
            >
              <Text
                color="grey.800"
                fontSize={{
                  base: "20px",
                  sm: "24px",
                  lg: "32px",
                }}
                fontWeight={500}
              >
                FalconX for edge applications
              </Text>
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
                allows for the efficient pooling and management of storage, HPC,
                device, and system memory Across the edge. Simplify edge
                architectures by deploying Accipiter’s Platform One, Which
                allows developers to see and manage all distributed edge
                resources as a single system. PCIe sensor integration enables
                HPC, memory, and storage to have bit by bit access to sensor
                data and enables multiple AI instances to access the same
                sensors simultaneously. This architecture supports lightweight
                and reconfigurable edge applications to LAN scales.
              </Text>
            </VStack>
            <Flex flexDirection="column" gap={3}>
              <SlideFade in delay={0.1}>
                <SummaryCard1
                  number={1}
                  text={`Smaller form factor, lower SWAP PCIe based cameras and sensors`}
                />
              </SlideFade>
              <SlideFade in delay={0.2}>
                <SummaryCard1
                  number={2}
                  text={`Connect sensors directly to HPC devices`}
                />
              </SlideFade>
              <SlideFade in delay={0.3}>
                <SummaryCard1
                  number={3}
                  text={`Multiple AI instances utilizing the same or different sensors`}
                />
              </SlideFade>
              <SlideFade in delay={0.4}>
                <SummaryCard1
                  number={4}
                  text={`Rapidly deploy AI instances to the edge`}
                />
              </SlideFade>
              <SlideFade in delay={0.5}>
                <SummaryCard1
                  number={4}
                  text={`More efficient harwdare usage, cost, and SWAP`}
                />
              </SlideFade>
            </Flex>
          </Flex>
          <Flex
            justifyContent="center"
            mt={{
              base: 32,
              lg: 40,
            }}
            h={{
              base: "auto",
              md: "300px",
              lg: "340px",
              xl: "400px",
            }}
          >
            <SwitchSVG />
          </Flex>
          <Flex
            justify="center"
            maxW="100%"
            overflow="scroll"
            mt={{
              base: 32,
              lg: 40,
            }}
          >
            <Flex
              gap={20}
              position="relative"
              minW={{
                base: "1000px",
                xl: "1200px",
              }}
            >
              <Box
                borderTop="4px dashed #00A5C2"
                h="4px"
                position="absolute"
                top="50%"
                w="100%"
                zIndex={-1}
              />
              <SummaryCard2>
                Resource pooling provides on demand scaling of resources
              </SummaryCard2>
              <SummaryCard2>
                Sensors are connected directly to system and device memory
              </SummaryCard2>
              <SummaryCard2>
                Bit-bit access to sensor data means no need for data
                preprocessing at the edge
              </SummaryCard2>
              <SummaryCard2>Supports real-time edge applications</SummaryCard2>
            </Flex>
          </Flex>
        </Container>
        <Spacer size={"lg"} />
        <div>Benefits</div>
        <div>Use cases</div>
      </article>
    </>
  );
};

type SummaryCard1Props = {
  number: number;
  text: string;
};

const SummaryCard1: React.FC<SummaryCard1Props> = ({ number, text }) => {
  return (
    <Flex align="center" background="grey.100" gap={4} p={4}>
      <Flex
        align="center"
        background="electric.100"
        borderRadius="50%"
        h="32px"
        justify="center"
        w="32px"
      >
        <Text color="electric.400" fontSize="20px" fontWeight={600}>
          {number}
        </Text>
      </Flex>
      <Text color="grey.800" fontSize="14px">
        {text}
      </Text>
    </Flex>
  );
};

const SummaryCard2: React.FC = ({ children }) => {
  return (
    <Box
      background="electric.100"
      borderRadius="8px"
      color="electric.400"
      p={4}
      fontWeight={600}
    >
      {children}
    </Box>
  );
};

export default EdgeApplications;
