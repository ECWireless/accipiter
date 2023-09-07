import Head from "next/head";
import { Box, VStack, Flex, Text, Image, SlideFade } from "@chakra-ui/react";

import Spacer from "components/Spacer";
import { Container } from "chakraComponents/Flex";
import { SwitchSVG } from "components/SVGs/SwitchSvg";

import {
  BenefitsCard,
  SummaryCard1,
  UseCasesCard,
} from "views/home/OurTech/components";

const FlexibilityAndCxlCoherency: React.FC = () => {
  return (
    <>
      <Head>
        <title>Flexibility and CXL Coherency| Accipiter Systems</title>
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
              Flexibility + CXL Coherency
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
                FalconX + CXL
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
                takes the enabling technological benefits of PCIe interconnects,
                and pairs it with the enabling device and memory coherency of
                CXL. This allows for shared memory systems which have lower
                development costs and code complexity. PCIe system-interconnects
                give all devices access to all the memory. Enabling components
                to communicate more efficiently.
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
                  number={4}
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
                text={`Applications have access to GPU, storage, and memory from across the system. No changes to the applications are needed`}
              />
              <BenefitsCard
                number={2}
                text={`Systems utilize DMA to communicate utilizing system memory over PCIe`}
              />
              <BenefitsCard
                number={3}
                text={`High power and flexibility of distributed compute, without the high management, hardware, or SWAP costs`}
              />
              <BenefitsCard
                number={4}
                text={`Infrastructure is now a tightly integrated and flexible single system`}
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
              icon="/icons/aid.svg"
            />
            <UseCasesCard
              title="Economics"
              body={`PCIe and CXL consortiums and industry have identified these enabling technologies as critical to future applications. Efficient systems reduce hardware and personnel costs.`}
              icon="/icons/ai.svg"
            />
            <UseCasesCard
              title="Performance"
              body={`Enable applications with large pools of harware, and move data efficiently over a system with ultra-high speed and a path to terabit per second per port.`}
              icon="/icons/aiAndGear.svg"
            />
            <UseCasesCard
              title="Efficiency"
              body={`Industry leading resource pooling paired with  PCIe-based interconnects allow for increases in efficiency throughout the software and hardware.`}
              icon="/icons/aiAndCloud.svg"
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
