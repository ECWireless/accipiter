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
  Image,
  SlideFade,
} from "@chakra-ui/react";
import Spacer from "components/Spacer";

import { Container } from "chakraComponents/Flex";
import { Container as OldContainer } from "components/Containers";

import {
  BenefitsCard,
  SummaryCard1,
  UseCasesCard,
} from "views/home/OurEdge/components";

const FlexibilityAndCxlCoherency: React.FC = () => {
  const slug = "pcie-and-cxl";
  const title = "PCIe + CXL";

  return (
    <>
      <Head>
        <title>{title} | Accipiter Systems</title>
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
            <Text color="electric.400" textAlign="center" variant="h1">
              PCIe + CXL
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
                PCie + CXL
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
                Takes the technological benefits of PCIe interconnects and pairs
                it with CXL (Compute Express Link). This allows for shared
                memory systems which have lower development costs and code
                complexity. PCIe system interconnects + CXL give all devices
                access to all memory across a platform.
              </Text>
            </VStack>
            <Flex flexDirection="column" gap={3}>
              <SlideFade in delay={0.1}>
                <SummaryCard1
                  number={1}
                  text={`Disaggregated system resource pooling`}
                />
              </SlideFade>
              <SlideFade in delay={0.2}>
                <SummaryCard1
                  number={2}
                  text={`Reduced software complexity and development cost`}
                />
              </SlideFade>
              <SlideFade in delay={0.3}>
                <SummaryCard1
                  number={3}
                  text={`Reduced system cost through efficient hardware usage and SWAP`}
                />
              </SlideFade>
              <SlideFade in delay={0.4}>
                <SummaryCard1
                  number={4}
                  text={`Industry leading interconnects enable device communication`}
                />
              </SlideFade>
              <SlideFade in delay={0.5}>
                <SummaryCard1
                  number={5}
                  text={`Efficient CPU-to-device and CPU-to-memory architecture`}
                />
              </SlideFade>
            </Flex>
          </Flex>
        </Container>
        <Flex
          borderTop="3px #E8E7E7 solid"
          direction={{
            base: "column",
            xl: "row",
          }}
          mt={20}
        >
          <VStack
            background={{
              base: "grey.100",
              xl: "white",
            }}
            borderRight={{
              base: "none",
              xl: "3px #E8E7E7 solid",
            }}
            pt={10}
            pb={20}
            w={{
              base: "100%",
              xl: "50%",
            }}
          >
            <Text
              color="grey.800"
              fontSize={{
                base: "20px",
                sm: "24px",
                lg: "32px",
              }}
              fontWeight={600}
            >
              Legacy Solution
            </Text>
            <Text color="red.400" textAlign="center" w="300px">
              Applications run on and only have access to one server’s resources
            </Text>
            <Image
              alt="Legacy Solution Diagram"
              src="/images/legacySolution.png"
              h={{
                base: "auto",
                md: "350px",
              }}
              w={{
                base: "75%",
                md: "auto",
              }}
            />
          </VStack>
          <VStack
            pb={20}
            pt={10}
            w={{
              base: "100%",
              xl: "50%",
            }}
          >
            <Text
              color="blue.400"
              mb={10}
              fontSize={{
                base: "20px",
                sm: "24px",
                lg: "32px",
              }}
              fontWeight={600}
            >
              FalconX PCIe + CXL
            </Text>
            <Image
              alt="FalconX PCIe + CXL Solution Diagram"
              src="/images/falconxSolution.png"
              h={{
                base: "auto",
                md: "350px",
              }}
              w={{
                base: "75%",
                md: "auto",
              }}
            />
          </VStack>
        </Flex>
        <Box background="electric.900" py={20}>
          <Container>
            <Flex
              direction={{
                base: "column",
                xl: "row",
              }}
              gap={20}
            >
              <VStack
                alignItems={{
                  base: "center",
                  xl: "flex-start",
                }}
                justify="center"
                w={{
                  base: "100%",
                  xl: "50%",
                }}
              >
                <Text
                  color="white"
                  fontSize={{
                    base: "20px",
                    sm: "24px",
                    lg: "32px",
                  }}
                  fontWeight={600}
                >
                  Device + Memory Coherency
                </Text>
                <Text
                  color="white"
                  textAlign={{
                    base: "center",
                    xl: "left",
                  }}
                >
                  PCIe + CXL enables system and device memory coherency over the
                  fastest system interconnect
                </Text>
              </VStack>
              <Image
                alt="Device + Memory Coherency Diagram"
                src="/images/deviceCoherency.png"
                w={{
                  base: "100%",
                  xl: "50%",
                }}
              />
            </Flex>
          </Container>
        </Box>
        <Box background="yellow.400" py={20}>
          <Container>
            <Flex
              direction={{
                base: "column",
                xl: "row",
              }}
              gap={20}
            >
              <VStack
                alignItems={{
                  base: "center",
                  xl: "flex-start",
                }}
                justify="center"
                w={{
                  base: "100%",
                  xl: "50%",
                }}
              >
                <Text
                  color="white"
                  fontSize={{
                    base: "20px",
                    sm: "24px",
                    lg: "32px",
                  }}
                  fontWeight={600}
                >
                  Applications
                </Text>
                <Text
                  color="white"
                  textAlign={{
                    base: "center",
                    xl: "left",
                  }}
                >
                  Applications run independent of servers within coherent memory
                  space, and have access to all device and memory resources
                  across the LAN
                </Text>
              </VStack>
              <Image
                alt="Applications Diagram"
                src="/images/applications.png"
                w={{
                  base: "100%",
                  xl: "50%",
                }}
              />
            </Flex>
          </Container>
        </Box>
        <Box background="electric.900" py={20}>
          <Container>
            <Text color="white" mb={8} textAlign="center" variant="h1">
              Benefits
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
                CXL + PCIe provides open-standard interconnects and enables
                memory coherency across the system.
              </Text>{" "}
              Memory coherency allows HPC, storage, and system memory to be
              utilized more efficiently, with higher performance than before.
              PCIe allows for high-bandwidth and low latency between CXL equiped
              devices and systems.
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
                text={`Applications have access to GPU, storage, and memory from across the system. No changes to the applications are needed.`}
              />
              <BenefitsCard
                number={2}
                text={`Systems utilize DMA to communicate utilizing system memory over PCIe.`}
              />
              <BenefitsCard
                number={3}
                text={`High power and flexibility of distributed compute, without the high management, hardware, or SWAP costs.`}
              />
              <BenefitsCard
                number={4}
                text={`Infrastructure is now a tightly integrated and flexible single system.`}
              />
            </Flex>
          </Container>
        </Box>
        <Container>
          <Text color="electric.400" my={10} textAlign="center" variant="h1">
            Industry Leading Technology
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
              title="Scale"
              body={`System and device memory coherence enables hyperscale deployments by reducing SWAP and removing the need for network segmentation.`}
              icon="/icons/scale.svg"
            />
            <UseCasesCard
              title="Economics"
              body={`PCIe and CXL consortiums and industry have identified these enabling technologies as critical to future applications. Efficient systems reduce hardware and personnel costs.`}
              icon="/icons/economics.svg"
            />
            <UseCasesCard
              title="Performance"
              body={`Enable applications with large pools of harware, and move data efficiently over a system with ultra-high speed and a path to terabit per second per port.`}
              icon="/icons/performance.svg"
            />
            <UseCasesCard
              title="Efficiency"
              body={`Industry leading resource pooling paired with  PCIe-based interconnects allow for increases in efficiency throughout the software and hardware.`}
              icon="/icons/efficiency.svg"
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
            Accipiter Systems FlaconX + CXL is the only flexible single system
            solution for CXL deployments
          </Text>
        </Container>
      </article>
    </>
  );
};

export default FlexibilityAndCxlCoherency;
