import Head from "next/head";
import NextLink from "next/link";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  Box,
  VStack,
  Flex,
  Text,
  SlideFade,
} from "@chakra-ui/react";

import Spacer from "components/Spacer";
import { Container } from "chakraComponents/Flex";
import { SwitchSVG } from "components/SVGs/SwitchSvg";

import {
  BenefitsCard,
  SummaryCard1,
  SummaryCard2,
  UseCasesCard,
} from "views/home/OurEdge/components";
import { Container as OldContainer } from "components/Containers";

const EdgeApplications: React.FC = () => {
  const slug = "edge-applications";
  const title = "Edge Applications";

  return (
    <>
      <Head>
        <title>{slug} | Accipiter Systems</title>
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
                FalconX Edge Applications
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
                Supports pooling and management of storage, HPC, device, and
                system memory across the edge. Simplify edge architectures by
                deploying Accipiter’s OnePlatform, which allows developers to
                see and manage all distributed edge resources as a single
                system. PCIe sensor integration enables HPC, memory, and storage
                to have bit by bit access to sensor data and enables multiple AI
                instances to access the same sensors simultaneously. This
                architecture supports lightweight and reconfigurable edge
                applications at LAN scales.
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
            justify={{
              base: "flex-start",
              xl: "center",
            }}
            overflow={{
              base: "scroll",
              xl: "hidden",
            }}
            mt={{
              base: 32,
              lg: 40,
            }}
            maxW="100%"
          >
            <Flex
              justify="space-between"
              position="relative"
              boxSizing="border-box"
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
                Bit by bit access to sensor data means no need for data
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
              or data preconditioning, enabling On-Demand deployment.
            </Text>
            <Flex
              gap={10}
              justify="center"
              maxW="800px"
              mt={20}
              mx="auto"
              wrap="wrap"
            >
              <BenefitsCard
                number={1}
                text={`Edge resources appear as a single system`}
              />
              <BenefitsCard
                number={2}
                text={`Efficient scaling, hardware, and sensor usage`}
              />
              <BenefitsCard
                number={3}
                text={`Built-In local storage and playback capabilities`}
              />
              <BenefitsCard
                number={4}
                text={`Bit-bit sensor access supports advanced application architectures and algorithms`}
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
              title="Screening Security"
              body={`Sensor based security, biometrics, and real-time decision making at the edge, with the need for extreme performance, accuracy, and efficiency. Accipiter decreases  screening time to <15 seconds. Supports large, geographically dispersed databases.`}
              icon="/icons/shield.svg"
            />
            <UseCasesCard
              title="Computer Vision"
              body={`Connect HPC and cameras to large databases more efficiently. Efficiently utilize sensors and enable more efficient and accurate algorithms.`}
              icon="/icons/vision.svg"
            />
            <UseCasesCard
              title="Internet Of Things"
              body={`Connect geographically dispersed IOT devices with a low latency interconnect. Support ingress and egress functions of a variety of sensors. Embedded PCIe devices enhance IOT environments.`}
              icon="/icons/camera.svg"
            />
            <UseCasesCard
              title="Manufacturing Monitoring"
              body={`Next generation speed, safety, and monitoring with PCIe enabled sensors, cameras, and IOT. Enable simple management and deployment of monitoring features.`}
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

export default EdgeApplications;
