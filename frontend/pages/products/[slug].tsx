import groq from "groq";
import { PortableText } from "@portabletext/react";
import { useRouter } from "next/router";
import styled from "styled-components";
import client from "client";
import { colors, GU } from "components/theme";
import Spacer from "components/Spacer";
import { VStack } from "@chakra-ui/react";

import { urlFor } from "lib/helpers";

import { media } from "components/breakpoints";
import { Container, Flex } from "components/Containers";
import { H2, P1 } from "components/Typography";
import Spinner from "components/Spinner";

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

const Product = ({ product }) => {
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

  return (
    <article>
      <Spacer size={"lg"} />
      <Spacer size={"md"} />
      <Container>
        <VStack>
          <H2 style={{ textAlign: "center", fontWeight: 600 }}>
            {productName}
          </H2>
          <Spacer size={"sm"} />
          <StyledDivider />
          {productImage && (
            <div style={{ position: "relative" }}>
              <StyledSkewedBackground />
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
      </Container>
    </article>
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
    width: ${GU * 80}px;
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

const StyledSkewedBackground = styled.div`
  background: ${colors.blue};
  transform: skewX(-32deg) rotate(60deg) translate(50%, -32%);
  opacity: 0.1;
  height: 100%;
  position: absolute;
  top: 0;
  width: 40%;
  z-index: -1;

  ${media.sm`
    transform: skewX(-32deg) rotate(60deg) translate(50%, -25%);
  `}
`;

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
