import Head from "next/head";
import NextLink from "next/link";
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

const PhotonicProcessing: React.FC = () => {
  const slug = "photo-processing";
  const title = "Photonic Processing";

  return (
    <>
      <Head>
        <title>
          Optical Switching & Photonic Processing | Accipiter Systems
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
            <Text variant="h1">Accipiter Systems</Text>
          </SlideFade>
          <SlideFade in delay={0.1}>
            <Text align="center" color="electric.400" variant="h1">
              Optical Switching & Photonic Processing
            </Text>
          </SlideFade>
        </VStack>
        <Spacer size={"md"} />
        <Box background="electric.900" py={20}>
          <Container>
            <Text color="white" textAlign="center" variant="h1">
              History
            </Text>
          </Container>
        </Box>
        <Container>
          <Spacer size={"md"} />
          <Text
            fontSize={{
              base: "14px",
              sm: "16px",
            }}
            fontWeight={500}
            lineHeight={{
              base: "26px",
              sm: "32px",
            }}
          >
            Optical switching first emerged in the environments of Wide Area
            Networking and telecommunications networks. Synchronous Optical
            Networking (SONET) provided very high bandwidth connectivity between
            cities and regions for telecom traffic. Wave Division Multiplexing
            (WDM) yielded greater flexibility and efficiency, permitting optical
            network access in configurations such as Metropolitans Area Networks
            (MANs) taking the form of rings. In both of these types of optical
            networking deployments, the data path is largely fixed or static and
            designed to support predictable traffic patterns. Similarly, early
            forms of photonic switching relied on tiny mirrors (MEMS) or inkjet
            technologies to direct photons. While these techniques could switch
            beams of light, they did so at a speed that was most applicable to
            relatively constant and unchanging traffic, such as telecom trunk
            lines between metropolitan areas.
          </Text>
          <Spacer size={"md"} />
          <Text
            align="center"
            color="electric.400"
            fontWeight={900}
            variant="h2"
          >
            FabricZero&#8482; From Accipiter Systems
          </Text>
          <Spacer size={"md"} />
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
            FabricZero utilizes innovative photonic networking components to
            switch data plane traffic in photonics on a per-packet or per frame
            basis, without the need for electronic conversion, inspection, and
            forwarding of traffic across multiple network layers. Produced by
            Accipiter Systems, FabricZero harnesses the capacity, speed, and
            simplicity of photonic switching for the data center. One key to
            harnessing the power of the photonic core is Accipiter’s
            Transmission Algorithm for Local Optical Networks, or TALON TM.
            TALONTM provides the fast control algorithm required to coordinate
            traffic flows through the core. The architecture of FabricZero is
            based on a fabric data center design, collapsing hierarchical layers
            and simplifying data center networking by eliminating network hops.
            The primary components of the system are: • Fabric Extender: This is
            a 1U device installed at the top of racks or as a multi-rack
            aggregation device. The Fabric Extender provides standards-based
            ports for interfacing with servers or other devices supporting
            Ethernet, InfiniBand, Fibre Channel and other protocols.
          </Text>
          <Spacer size={"md"} />
          <Image src="/images/fabricZero.png" w="100%" />
          <Spacer size={"md"} />
        </Container>
        <Box background="electric.900" py={20}>
          <Container>
            <Text color="white" textAlign="center" variant="h2">
              Department of Defense Strategic Capabilities Office SBIR Phase II
            </Text>
          </Container>
        </Box>
        <Container>
          <Spacer size={"md"} />
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
            By significantly accelerating convolution neural networks (CNN)
            beyond the limits of electronic computation, high speed photonic
            processing and interconnects have the potential to dramatically
            advance the speed and complexity of AI/ML-based systems. This
            program’s objective is to demonstrate a photonic processor system
            that uses a state-of-the art AI/ML architecture to classify targets
            from 4K, 480 fps camera imagery, while de- fining a near-term path
            to a photonic integrated circuit (PIC)-based ATR system that
            processes speed photon- ic processor CNN implementation • The
            University of Pittsburgh (Dr. Nathan Youngblood) recently demon-
            strated an integrated photonic hardware accelerator (tensor core)
            that is capable of computing general ma- trix-vector operations at
            speeds of trillions of multiply-accumulate operations per second
            (Tera-MAC/s). This approach to photonic computing can easily exceed
            the compute density of state-of-the-art digital processors by
            &gt;1000×, leading to high performance computing systems with
            exceptional SWaP metrics. Our ground- breaking research provides a
            well-defined path to a future photonic integrated circuit (PIC)
            implementation of the discrete-component version proposed for this
            DP2 program. Tera-MAC/s PICs exhibit much lower energy consumption
            and much higher bandwidth than their electrical counterparts. They
            are also superior to tradi- tional free-space optical approaches
            (e.g., 2f, 4f correlators) for AI/ML applications because their
            programma- ble tera-MAC/s computational ability can be applied to
            all layers of deep CNNs. The Phase II “sub-phase” pro- gram
            finalizes requirements, refines the architecture, and develops a
            preliminary ATR system design. The system accepts PCIe imagery from
            a Ximea 4K 480 fps camera and formats that data for wavelength
            division multiplexed (WDM) fiber-optic transmission to a photonic
            processor that implements highly parallelized, first-layer CNN
            feature extraction. We will also complete a software simulation of
            our photonic processor to model its performance in a photonic ATR
            system.
          </Text>
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

export default PhotonicProcessing;
