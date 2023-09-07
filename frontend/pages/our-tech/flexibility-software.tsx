import Head from "next/head";
import { Box, VStack, Flex, Text, SlideFade, Image } from "@chakra-ui/react";

import Spacer from "components/Spacer";
import { Container } from "chakraComponents/Flex";

import { SummaryCard1 } from "views/home/OurTech/components";

const FlexibilitySoftware: React.FC = () => {
  return (
    <>
      <Head>
        <title>Flexibility Software | Accipiter Systems</title>
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
              Flexibility Software
            </Text>
          </SlideFade>
        </VStack>
        <Container>
          <Flex
            align="center"
            flexDirection={{ base: "column-reverse", xl: "row" }}
            justify="space-between"
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
              w={{
                base: "100%",
                xl: "52%",
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
                Accipiters FalconX Software
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
                enables management, control, and monitoring of PCIe
                interconnected devices and across disaggregated single systems.
                Take full advantage of the benefits of PCIe with a fully
                integrated and seamless software. Manage hardware pools and
                allocations, monitor performance in real-time, perform automated
                network optimization, and deploy apps efficiently using a single
                pane of glass.
              </Text>
              <Text
                color="electric.400"
                fontSize={{
                  base: "14px",
                  sm: "16px",
                }}
                fontWeight={600}
                lineHeight={{
                  base: "26px",
                  sm: "32px",
                }}
                mt={10}
              >
                FalconX Software works with any Accipiter product and allows
                users to maximize deployment of PCIe as a system interconnect.
              </Text>
            </VStack>
            <Image
              alt="falconX Software Diagram"
              w={{
                base: "220px",
                md: "300px",
                xl: "38%",
              }}
              src="/images/falconxSoftware.png"
            />
          </Flex>
          <Flex
            align="center"
            flexDirection={{ base: "column", xl: "row" }}
            gap={{
              base: 20,
              xl: 10,
            }}
            justify="space-between"
            mt={{
              base: 10,
              lg: 20,
            }}
          >
            <VStack
              align="flex-start"
              spacing={2}
              width={{
                base: "100%",
                xl: "60%",
              }}
            >
              <Text
                background="yellow.400"
                color="white"
                fontSize={{
                  base: "24px",
                  lg: "32px",
                }}
                fontWeight={600}
                py={{
                  base: 2,
                  lg: 0,
                }}
                textAlign="center"
                w="100%"
              >
                Application
              </Text>
              <Flex
                color="white"
                fontSize={{
                  base: "12px",
                  lg: "18px",
                }}
                fontWeight={600}
                gap={2}
                textAlign="center"
                w="100%"
              >
                <Text background="#C2C8D3" py={3} w="100%">
                  FalconX SDN
                </Text>
                <Text background="#C2C8D3" py={3} w="100%">
                  FalconX Device Manager
                </Text>
                <Text background="#C2C8D3" py={3} w="100%">
                  FalconX GUI
                </Text>
              </Flex>
              <Flex
                color="white"
                fontSize={{
                  base: "12px",
                  lg: "18px",
                }}
                fontWeight={600}
                gap={2}
                textAlign="center"
                w="100%"
              >
                <Text background="#C2C8D3" py={3} w="100%">
                  FalconX Drivers
                </Text>
                <Text background="#C2C8D3" py={3} w="100%">
                  FalconX Monitor
                </Text>
              </Flex>
              <Text
                background="grey.400"
                color="white"
                fontSize={{
                  base: "24px",
                  lg: "32px",
                }}
                fontWeight={600}
                py={{
                  base: 2,
                  lg: 0,
                }}
                textAlign="center"
                w="100%"
              >
                FalconX Control
              </Text>
              <Text
                background="electric.400"
                color="white"
                fontSize={{
                  base: "24px",
                  lg: "32px",
                }}
                fontWeight={600}
                py={{
                  base: 2,
                  lg: 0,
                }}
                textAlign="center"
                w="100%"
              >
                FalconX Software
              </Text>
            </VStack>
            <Flex
              flexDirection="column"
              gap={3}
              w={{
                base: "100%",
                xl: "40%",
              }}
            >
              <SlideFade in delay={0.1}>
                <SummaryCard1
                  number={1}
                  text={`Fully integrated PCIe networking software`}
                />
              </SlideFade>
              <SlideFade in delay={0.2}>
                <SummaryCard1
                  number={2}
                  text={`Control your LAN with the power of PCIe`}
                />
              </SlideFade>
              <SlideFade in delay={0.3}>
                <SummaryCard1
                  number={3}
                  text={`Monitor and optimize performance`}
                />
              </SlideFade>
              <SlideFade in delay={0.4}>
                <SummaryCard1
                  number={4}
                  text={`Manage applications in an easy to use GUI`}
                />
              </SlideFade>
            </Flex>
          </Flex>
        </Container>
        <Spacer size={"lg"} />
        <Box background="electric.900" py={20}>
          <Container>
            <Text color="white" mb={8} textAlign="center" variant="h1">
              Capabilities
            </Text>
            <Text
              color="white"
              textAlign={{ base: "left", lg: "center" }}
              fontSize={{
                base: "14px",
                sm: "16px",
              }}
              lineHeight={{
                base: "26px",
                sm: "32px",
              }}
            >
              Integrate and manage Accipiter PCIe interconnects into LAN
              infrastructures, and leverage the power of PCIe
            </Text>
          </Container>
        </Box>
        <Container>
          <Flex
            justify="center"
            gap={{
              base: 10,
              lg: 20,
            }}
            mb={20}
            wrap="wrap"
          >
            Cards
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
            Accipiter Systems FalconX enables current and future applications to
            leverage PCIe interconnects
          </Text>
        </Container>
      </article>
    </>
  );
};

export default FlexibilitySoftware;
