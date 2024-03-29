import groq from "groq";
import { PortableText } from "@portabletext/react";
import { useRouter } from "next/router";
import styled from "styled-components";
import client from "client";
import { colors, GU } from "components/theme";
import Spacer from "components/Spacer";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  VStack,
} from "@chakra-ui/react";
import Head from "next/head";
import NextLink from "next/link";
import { useMemo } from "react";

import { urlFor } from "lib/helpers";

import { media } from "components/breakpoints";
import { Container, Flex } from "components/Containers";
import { H2, H3, P1 } from "components/Typography";
import Spinner from "components/Spinner";

import specData from "data/specs.json";

const ptComponents = {
  types: {
    image: ({ value }) => {
      if (!value?.asset?._ref) {
        return null;
      }
      return (
        <StyledContentImage
          alt={value.alt || " "}
          loading="lazy"
          src={urlFor(value).auto("format") as unknown as string}
        />
      );
    },
  },
};

const Product = ({ product, slug }) => {
  const router = useRouter();

  if (router.isFallback) {
    return (
      <StyledSpinnerContainer>
        <Spinner />
      </StyledSpinnerContainer>
    );
  }

  const {
    title = "Missing title",
    productName = "Missing product name",
    productImage,
    productCapabilities = [],
    productSummary = "No summary",
    productDescription = [],
  } = product;

  const specs = useMemo(() => {
    const product = specData[slug];
    if (!product) {
      return [];
    }
    return Object.entries(product).map(([key, value]) => ({
      key,
      value,
    }));
  }, [slug]);

  return (
    <div>
      <Head>
        <title>{title}</title>
      </Head>
      <article>
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
            <BreadcrumbItem
              color="electric.400"
              fontWeight={600}
              _hover={{
                textDecoration: "underline",
              }}
            >
              <BreadcrumbLink as={NextLink} href={`/products/${slug}`}>
                {`${slug.slice(0, 1).toUpperCase() + slug.slice(1, 12)}${
                  slug.length > 12 ? "..." : ""
                }`}
              </BreadcrumbLink>
            </BreadcrumbItem>
          </Breadcrumb>
          <Spacer size={"md"} />
          <VStack>
            <H2 style={{ textAlign: "center", fontWeight: 600 }}>
              {productName}
            </H2>
            <br />
            <StyledDivider />
            {productImage && (
              <div style={{ position: "relative" }}>
                {/* <StyledSkewedBackground /> */}
                <StyledProductImage
                  src={urlFor(productImage).url()}
                  alt={`${title} cover photo`}
                />
              </div>
            )}
          </VStack>
          <Spacer size={"md"} />
          <StyledColumnsContainer justify="space-between">
            <StyledLeftContainer>
              <P1 color={colors.blue} style={{ fontWeight: 600 }}>
                {productSummary}
              </P1>
              <Spacer size={"sm"} />
              <StyledDescriptionContainer>
                <PortableText
                  value={productDescription}
                  components={ptComponents}
                />
              </StyledDescriptionContainer>
            </StyledLeftContainer>
            <StyledCapabilitiesContainer>
              <PortableText
                value={productCapabilities}
                components={ptComponents}
              />
            </StyledCapabilitiesContainer>
          </StyledColumnsContainer>
          <Spacer size={"lg"} />
          {specs.length > 0 && (
            <>
              <StyledColumnsContainer>
                <StyledSpecsHeadingContainer>
                  <H3 style={{ fontWeight: 700, textAlign: "center" }}>
                    Delivering Results in RealTime.
                  </H3>
                </StyledSpecsHeadingContainer>
                <StyledTableContainer>
                  <StyledTable>
                    <tbody>
                      {specs.map(({ key, value }) => (
                        <tr key={key}>
                          <td>{key}</td>
                          <td>{value}</td>
                        </tr>
                      ))}
                    </tbody>
                  </StyledTable>
                </StyledTableContainer>
              </StyledColumnsContainer>
              <Spacer size={"lg"} />
            </>
          )}
        </Container>
      </article>
    </div>
  );
};

const query = groq`*[_type == "product" && slug.current == $slug][0]{
  title,
  productName,
  productImage,
  productCapabilities,
  productSummary,
  productDescription,
}`;

export async function getStaticPaths() {
  const paths = await client.fetch(
    groq`*[_type == "product" && defined(slug.current)][].slug.current`
  );

  return {
    paths: paths.map((slug) => ({ params: { slug } })),
    fallback: true,
  };
}

export async function getStaticProps(context) {
  // It's important to default the slug so that it doesn't return "undefined"
  const { slug = "" } = context.params;
  const product = await client.fetch(query, { slug });

  if (!product) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      product,
      slug,
    },
    revalidate: 10,
  };
}
export default Product;

const StyledSpinnerContainer = styled.div`
  align-items: center;
  display: flex;
  height: 90vh;
  justify-content: center;
  width: 100%;
`;

const StyledProductImage = styled.img`
  height: 220px;
  margin-top: 20px;
  object-fit: contain;
  width: 100%;

  ${media.xs`
    height: 300px;
    width: ${GU * 110}px;
  `}
`;

const StyledContentImage = styled.img`
  width: 100%;
`;

const StyledDivider = styled.div`
  height: 2px;
  background: ${colors.blue};
  margin: 0 auto;
  width: ${GU * 60}px;
`;

// const StyledSkewedBackground = styled.div`
//   background: ${colors.blue};
//   transform: skewX(-32deg) rotate(60deg) translate(50%, -32%);
//   opacity: 0.1;
//   height: 100%;
//   position: absolute;
//   top: 0;
//   width: 40%;
//   z-index: -1;

//   ${media.sm`
//     transform: skewX(-32deg) rotate(60deg) translate(50%, -25%);
//   `}
// `;

const StyledColumnsContainer = styled(Flex)`
  flex-direction: column;

  ${media.md`
    flex-direction: row;
  `}
`;

const StyledLeftContainer = styled.div`
  margin-bottom: ${GU * 10}px;
  width: 100%%;

  ${media.md`
    margin-bottom: 0px;
    width: 55%;
  `}
`;

const StyledDescriptionContainer = styled.div`
  p {
    font-size: 1.4rem;

    &:not(:last-child) {
      margin-bottom: 20px;
    }

    ${media.md`
      font-size: 1.6rem;
    `}
  }
`;

const StyledCapabilitiesContainer = styled.div`
  background: ${colors.grey};
  border: 2px solid ${colors.blue};
  border-radius: 10px;
  color: ${colors.white};
  letter-spacing: 0.5px;
  padding: ${GU * 6}px;
  width: 100%;

  p {
    font-weight: 600;
    font-size: 2rem;
    line-height: 24px;
    margin-bottom: ${GU * 6}px;
  }

  li {
    font-size: 1.4rem;
    line-height: 20px;
    margin-bottom: ${GU * 3}px;
    margin-left: ${GU * 3}px;
    padding-left: 0px;
  }

  ${media.sm`
    padding: ${GU * 10}px;

    li {
      font-size: 1.5rem;
    }
  `}

  ${media.md`
    padding: ${GU * 6}px;
    width: 40%;

    p {
      font-size: 2rem;
      line-height: 24px;
    }

    li {
      line-height: 20px;
    }
  `}

  ${media.lg`
    padding: ${GU * 10}px;

    p {
      font-size: 2.4rem;
    }

    li {
      font-size: 1.8rem;
      line-height: 24px;
      padding-left: ${GU * 3}px;
    }
  `}

  ${media.xl`
    font-size: 2.2rem;
    line-height: 25px;
  `}
`;

const StyledSpecsHeadingContainer = styled.div`
  align-items: center;
  display: flex;
  justify-content: center;
  margin-bottom: ${GU * 6}px;
  width: 100%;

  ${media.md`
    padding: 0 ${GU * 14}px;
    margin-bottom: 0;
    min-height: 100%;
    width: 50%;
  `}

  ${media.lg`
    padding: 0 ${GU * 20}px;
    width: 50%;
  `}
`;

const StyledTableContainer = styled.div`
  overflow-x: auto;
  width: 100%;

  ${media.md`
    width: 50%;
  `}
`;

const StyledTable = styled.table`
  border-collapse: collapse;
  width: 100%;
  th,
  td {
    border: 1px solid ${colors.blue};
    padding: 8px;
    text-align: left;
  }
`;
