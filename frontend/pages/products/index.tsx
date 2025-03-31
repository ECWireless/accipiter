import Head from "next/head";
import client from "client";
import NextLink from "next/link";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink } from "@chakra-ui/react";

import Spacer from "components/Spacer";

import { Products as ProductsSection } from "views/home";
import { Container } from "components/Containers";
import { urlFor } from "lib/helpers";

const Products: React.FC = ({ productsProps }: { [key: string]: any }) => {
  const {
    productsHeading,
    productsSubheading,
    products1Image,
    products1Name,
    products1Description,
    products2Image,
    products2Name,
    products2Description,
    products3Image,
    products3Name,
    products3Description,
    products4Image,
    products4Name,
    products4Description,
    products5Image,
    products5Name,
    products5Description,
    products6Image,
    products6Name,
    products6Description,
  } = productsProps;

  return (
    <div>
      <Head>
        <title>Products | Accipiter Systems</title>
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
              <BreadcrumbLink as={NextLink} href="/products">
                Products
              </BreadcrumbLink>
            </BreadcrumbItem>
          </Breadcrumb>
        </Container>
        <ProductsSection
          productsHeading={productsHeading}
          productsSubheading={productsSubheading}
          products1Image={urlFor(products1Image)}
          products1Name={products1Name}
          products1Description={products1Description}
          products2Image={urlFor(products2Image)}
          products2Name={products2Name}
          products2Description={products2Description}
          products3Image={urlFor(products3Image)}
          products3Name={products3Name}
          products3Description={products3Description}
          products4Image={urlFor(products4Image)}
          products4Name={products4Name}
          products4Description={products4Description}
          products5Image={urlFor(products5Image)}
          products5Name={products5Name}
          products5Description={products5Description}
          products6Image={urlFor(products6Image)}
          products6Name={products6Name}
          products6Description={products6Description}
        />
      </main>
    </div>
  );
};

const { DEPLOYMENT_ENVIRONMENT } = process.env;

export const getStaticProps = async () => {
  const productsProps =
    await client.fetch(`*[_type == "home" && slug.current == "${DEPLOYMENT_ENVIRONMENT}"][0] {
      productsHeading,
      productsSubheading,
      products1Image,
      products1Name,
      products1Description,
      products2Image,
      products2Name,
      products2Description,
      products3Image,
      products3Name,
      products3Description,
      products4Image,
      products4Name,
      products4Description,
      products5Image,
      products5Name,
      products5Description,
      products6Image,
      products6Name,
      products6Description,
	}`);
  return {
    props: { productsProps, revalidate: 10 },
  };
};

export default Products;
