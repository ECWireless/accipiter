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
import { SwitchSVG } from "components/SVGs/SwitchSvg";

import {
  BenefitsCard,
  SummaryCard1,
  SummaryCard2,
  UseCasesCard,
} from "views/home/OurEdge/components";
import { Container as OldContainer } from "components/Containers";

const AiMlApplications: React.FC = () => {
  const slug = "ai-ml-applications";
  const title = "AI/ML Applications";

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
            <Text color="electric.400" variant="h1">
              AI/ML Applications
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
                FalconX for Artificial Intelligence and Machine Learning
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
                Brings efficient pooling and management of HPC, storage device,
                and system memory to any AI workflow. Simplify hardware and
                software architectures by deploying AI on Accipiter’s
                OnePlatform, which allows developers to see and manage all
                resources as a single system. AI instances can now be deployed
                with the needed resources, allowing for faster AI training,
                execution, and hardware deployment. Enterprise AI features can
                now be used by businesses of all sizes.
              </Text>
            </VStack>
            <Flex flexDirection="column" gap={3}>
              <SlideFade in delay={0.1}>
                <SummaryCard1
                  number={1}
                  text={`Pooling provides on-demand scaling of resources`}
                />
              </SlideFade>
              <SlideFade in delay={0.2}>
                <SummaryCard1
                  number={2}
                  text={`Storage scaling connects data as close to processing as possible`}
                />
              </SlideFade>
              <SlideFade in delay={0.3}>
                <SummaryCard1
                  number={3}
                  text={`Memory scaling supports larger in-memory algorithms`}
                />
              </SlideFade>
              <SlideFade in delay={0.4}>
                <SummaryCard1
                  number={4}
                  text={`Rapidly deploy, manage, and scale AI instances`}
                />
              </SlideFade>
              <SlideFade in delay={0.5}>
                <SummaryCard1
                  number={5}
                  text={`Most efficient hardware usage, cost, and SWAP`}
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
                HPC or storage connected directly to system and device memory
              </SummaryCard2>
              <SummaryCard2>
                Scaling GPU memory supports large deployments
              </SummaryCard2>
              <SummaryCard2>
                One interconnect eliminates network segmentation, cost, and
                complexity
              </SummaryCard2>
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
              Resource pooling enables AI instances to run in pools of memory.
              Connects storage, HPC, and other systems with minimal overhead and
              data preconditioning. This provides efficient on-demand deployment
              of AI applications, and decreases software and hardware complexity
              or cost.
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
                text={`Enables advanced neural networks with more hidden layers`}
              />
              <BenefitsCard
                number={2}
                text={`Fast and efficient training saves time`}
              />
              <BenefitsCard
                number={3}
                text={`Scaling of system and device memory on demand supports hardware usage for complex algorithms`}
              />
              <BenefitsCard
                number={4}
                text={`Deploy more AI instances with less hardware and management overhead`}
              />
            </Flex>
            <Flex
              align="center"
              direction={{
                base: "column",
                lg: "row",
              }}
              gap={20}
              mt={32}
            >
              <Text
                color="white"
                fontSize="24px"
                fontWeight={600}
                w={{
                  base: "100%",
                  lg: "50%",
                }}
                textAlign="center"
              >
                Scale AI instances by deploying pools of PCIe connected
                resources
              </Text>
              <Image
                alt="Instance Pool Diagram"
                src="/images/instancePool.png"
                w={{
                  base: "100%",
                  lg: "50%",
                }}
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
              title="Medical Diagnosis"
              body={`Compare large reference files with AI faster and more efficiently. Connect powerful AI to large blocks of storage for faster and more accurate diagnosis.`}
              icon="/icons/aid.svg"
            />
            <UseCasesCard
              title="AI Training"
              body={`Speed up AI training by pooling HPC and memory. Scale training across machines and resource pools. Faster training means shorter time to deployment.`}
              icon="/icons/ai.svg"
            />
            <UseCasesCard
              title="Generative AI"
              body={`Support more complex prompts with multiple different media types, simultaneously and in real-time. User facing generative AI made efficient through PCIe integration.`}
              icon="/icons/aiAndGear.svg"
            />
            <UseCasesCard
              title="AI On-Demand"
              body={`Deploy and scale AI as a service with industry leading transport and memory pooling technologies. Low SWAP and higher hardware utilization results in better ROI.`}
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
            For faster deployment, scaling, and development of edge
            applications, Accipiter’s OnePlatform is the most flexible solution
          </Text>
        </Container>
      </article>
    </>
  );
};

export default AiMlApplications;
