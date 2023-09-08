import Head from "next/head";
import client from "client";
import NextLink from "next/link";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink } from "@chakra-ui/react";

import Spacer from "components/Spacer";

import { OurTech as OurTechSection } from "views/home";
import { Container } from "components/Containers";

const OurTech: React.FC = ({ ourTechProps }: { [key: string]: any }) => {
  const {
    techHeading,
    techSubheading,
    techCard1Title,
    techCard1Paragraph,
    techCard2Title,
    techCard2Paragraph,
    techCard3Title,
    techCard3Paragraph,
    techCard4Title,
    techCard4Paragraph,
  } = ourTechProps;

  return (
    <div>
      <Head>
        <title>Our Tech | Accipiter Systems</title>
      </Head>

      <main>
        <Spacer size={"lg"} />
        <Container>
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
              <BreadcrumbLink as={NextLink} href="/our-tech">
                Our tech
              </BreadcrumbLink>
            </BreadcrumbItem>
          </Breadcrumb>
        </Container>
        <OurTechSection
          topLine={false}
          techHeading={techHeading}
          techSubheading={techSubheading}
          techCard1Title={techCard1Title}
          techCard1Paragraph={techCard1Paragraph}
          techCard2Title={techCard2Title}
          techCard2Paragraph={techCard2Paragraph}
          techCard3Title={techCard3Title}
          techCard3Paragraph={techCard3Paragraph}
          techCard4Title={techCard4Title}
          techCard4Paragraph={techCard4Paragraph}
        />
      </main>
    </div>
  );
};

const { DEPLOYMENT_ENVIRONMENT } = process.env;

export const getStaticProps = async () => {
  const ourTechProps =
    await client.fetch(`*[_type == "home" && slug.current == "${DEPLOYMENT_ENVIRONMENT}"][0] {
    techHeading,
    techSubheading,
    techCard1Title,
    techCard1Paragraph,
    techCard2Title,
    techCard2Paragraph,
    techCard3Title,
    techCard3Paragraph,
    techCard4Title,
    techCard4Paragraph,
	}`);
  return {
    props: { ourTechProps, revalidate: 10 },
  };
};

export default OurTech;
