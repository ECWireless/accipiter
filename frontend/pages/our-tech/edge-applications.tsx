import Head from "next/head";
import { Box, VStack, Flex, Text, Image, SlideFade } from "@chakra-ui/react";

import Spacer from "components/Spacer";
import { Container } from "chakraComponents/Flex";
import { SwitchSVG } from "components/SVGs/SwitchSvg";

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
        <Box background="electric.900" py={20}>
          <Container>
            <Text color="white" mb={8} textAlign="center" variant="h1">
              Application Benefits
            </Text>
            <Text
              color="white"
              fontSize={{
                base: "14px",
                sm: "16px",
              }}
              lineHeight={{
                base: "26px",
                sm: "32px",
              }}
            >
              <Text as="span" fontWeight={600}>
                Applications are now deployed on memory within an edge resource
                pool - not on bare metal servers.
              </Text>{" "}
              The usage of resource pooling enables edge sensors to be directly
              connected to storage, HPC, and other sensors with minimal overhead
              or data preconditioning. This enables efficient On-Demand
              deployment of edge applications , and decreases software and
              hardware complexity and cost.
            </Text>
            <Flex gap={10} maxW="800px" mt={20} mx="auto" wrap="wrap">
              <BenefitsCard
                number={1}
                text={`Edge resources appear as a single system. Simplify application code, and efficiency`}
              />
              <BenefitsCard
                number={2}
                text={`Efficient scaling, hardware, and sensor usage`}
              />
              <BenefitsCard
                number={3}
                text={`Built-In local storage and playback capabilities. No need for different network segments`}
              />
              <BenefitsCard
                number={4}
                text={`Bit-Bit sensor access enables new application architectures and algorithms`}
              />
            </Flex>
          </Container>
        </Box>
        <Container>
          <Text color="electric.400" my={10} textAlign="center" variant="h1">
            Use Cases
          </Text>
          <Flex
            justify="center"
            gap={{
              base: 10,
              lg: 20,
            }}
            mb={20}
            wrap="wrap"
          >
            <UseCasesCard
              title="Screening security"
              body={`Sensor based security, biometrics, and real-time decision making at the edge, with the need for extreme performance, accuracy, and efficiency. Accipiter decreases  screening time to <15 Seconds. Supports large, geographically dispersed databases.`}
              icon="/icons/shield.svg"
            />
            <UseCasesCard
              title="Computer Vision"
              body={`Connect HPC and cameras to large databases more efficiently. Find POIs and make decisions faster. Efficiently utilize sensors and enable more efficient and accurate algorithms.`}
              icon="/icons/vision.svg"
            />
            <UseCasesCard
              title="Internet Of Things"
              body={`Connect geographically dispersed IOT devices with a low latency interconnect. Support ingress and egress functions of a variety of sensors. Embedded PCIe devices are ideal for IOT.`}
              icon="/icons/camera.svg"
            />
            <UseCasesCard
              title="Manufacturing Monitoring"
              body={`Next generation speed, safety, and monitoring with PCIe enabled sensors, cameras, and IOT. Enable easier to manage and deploy control and monitoring mechanisms.`}
              icon="/icons/gears.svg"
            />
          </Flex>
          <Text
            color="electric.400"
            fontSize={{
              base: "14px",
              sm: "16px",
            }}
            lineHeight={{
              base: "26px",
              sm: "32px",
            }}
            mb={20}
            textAlign="center"
          >
            For faster, more efficient deployment, scaling and development of
            edge applications, Accipiter’s OnePlatform is a powerful solution
          </Text>
        </Container>
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

type BenefitsCardProps = {
  number: number;
  text: string;
};

const BenefitsCard: React.FC<BenefitsCardProps> = ({ number, text }) => {
  return (
    <Flex
      align="center"
      background="electric.800"
      gap={4}
      pb={12}
      position="relative"
      pt={{
        base: 24,
        md: 12,
      }}
      px={{
        base: 10,
        md: 24,
      }}
      w={{
        base: "100%",
        md: "45%",
      }}
    >
      <Flex
        align="center"
        background="electric.100"
        borderRadius="50%"
        h="32px"
        justify="center"
        left={{
          base: "50%",
          md: "12px",
        }}
        position="absolute"
        transform={{
          base: "translateX(-50%)",
          md: "none",
        }}
        top={{
          base: "20px",
          md: "10px",
        }}
        w="32px"
      >
        <Text color="electric.400" fontSize="20px" fontWeight={600}>
          {number}
        </Text>
      </Flex>
      <Text color="white">{text}</Text>
    </Flex>
  );
};

type UseCasesCardProps = {
  title: string;
  body: string;
  icon: string;
};

const UseCasesCard: React.FC<UseCasesCardProps> = ({ title, body, icon }) => {
  return (
    <VStack
      background="grey.100"
      borderRadius="25px"
      fontWeight={600}
      h={{
        base: "275px",
        sm: "300px",
      }}
      p={{
        base: 8,
        sm: 10,
      }}
      position="relative"
      w={{
        base: "100%",
        lg: "45%",
      }}
    >
      <Image
        alt={title}
        left="50%"
        h="175px"
        position="absolute"
        src={icon}
        top="50%"
        transform="translate(-50%, -50%)"
      />
      <Text
        color="electric.400"
        fontSize={{
          base: "24px",
          sm: "28px",
        }}
        textAlign="center"
      >
        {title}
      </Text>
      <Text
        mt={{
          base: 2,
          sm: 10,
        }}
        fontSize={{
          base: "14px",
          sm: "16px",
        }}
        textAlign="center"
      >
        {body}
      </Text>
    </VStack>
  );
};

export default EdgeApplications;
