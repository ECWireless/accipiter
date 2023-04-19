import groq from "groq";
import { PortableText } from "@portabletext/react";
import { useRouter } from "next/router";
import styled from "styled-components";
import client from "client";
import { colors } from "components/theme";

import { urlFor } from "lib/helpers";

import { media } from "components/breakpoints";
import { Container, Flex } from "components/Containers";
import { H3 } from "components/Typography";
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
    productName,
    productImage,
    productCapabilities = [],
  } = product;

  return (
    <article>
      <Container>
        <Flex align={"center"}>
          {productImage && (
            <StyledCoverPhoto
              src={urlFor(productImage).url()}
              alt={`${title} cover photo`}
            />
          )}
          <Flex justify={"center"} full>
            <H3>{productName}</H3>
          </Flex>
        </Flex>
        <StyledContentBackground>
          <StyledContentContainer>
            <PortableText
              value={productCapabilities}
              components={ptComponents}
            />
          </StyledContentContainer>
        </StyledContentBackground>
      </Container>
    </article>
  );
};

const query = groq`*[_type == "product" && slug.current == $slug][0]{
  title,
  productName,
  productImage,
  productCapabilities,
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

  console.log(product);

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

const StyledCoverPhoto = styled.img`
  height: 300px;
  margin-top: 20px;
  object-fit: cover;
  min-width: 100%;

  ${media.sm`
    margin-top: 40px;
  `}

  ${media.lg`
    min-width: 50%;
  `}

  ${media.xl`
    height: 400px;
  `}
`;

const StyledContentImage = styled.img`
  width: 100%;
`;

const StyledContentBackground = styled.div`
  background: transparent;

  ${media.lg`
    background: rgba(167, 176, 188, 0.2);
  `}
`;

const StyledContentContainer = styled.div`
  background: ${colors.grey};
  font-size: 1.4rem;
  line-height: 20px;
  letter-spacing: 0.5px;
  margin: 40px auto;
  padding: 20px;
  width: 100%;

  ${media.sm`
    font-size: 1.5rem;
    padding: 40px;
  `}

  ${media.md`
    font-size: 1.6rem;
    width: 800px;
  `}

  ${media.xl`
    font-size: 2.2rem;
    line-height: 25px;
    width: 1200px;
  `}
`;
