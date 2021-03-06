import styled from 'styled-components';
import { Fade } from 'react-reveal'
import { media } from 'components/breakpoints';
import { colors, GU } from 'components/theme';

import Banner from 'components/Banner';
import { Container, Flex } from 'components/Containers';
import { H4, P2 } from 'components/Typography';
import Spacer from 'components/Spacer';

interface IProducts {
  productsHeading: string;
  productsSubheading: string;
  products1Image: any;
  products1Name: string;
  products1Description: string;
  products2Image: any;
  products2Name: string;
  products2Description: string;
  products3Image: any;
  products3Name: string;
  products3Description: string;
  products4Image: any;
  products4Name: string;
  products4Description: string;
}

export const Products: React.FC<IProducts> = ({
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
}) => {
  return (
    <div style={{ borderTop: `1px solid ${colors.blue}`}}>
      <Banner heading={productsHeading} subheading={productsSubheading} />
      <Container>
        <Flex align={'center'} justify={'space-between'} wrap={'true'}>
          <Fade bottom ssrFadeout>
            <ProductCard
              image={products1Image}
              heading={products1Name}
              subheading={products1Description}
            />
          </Fade>
          <Fade bottom ssrFadeout delay={100}>
            <ProductCard
              image={products2Image}
              heading={products2Name}
              subheading={products2Description}
            />
          </Fade>
        </Flex>
        <Flex align={'center'} justify={'space-between'} wrap={'true'}>
          <Fade bottom ssrFadeout delay={200}>
            <ProductCard
              image={products3Image}
              heading={products3Name}
              subheading={products3Description}
            />
          </Fade>
          <Fade bottom ssrFadeout delay={300}>
            <ProductCard
              image={products4Image}
              heading={products4Name}
              subheading={products4Description}
            />
          </Fade>
        </Flex>
      </Container>
      <Spacer size={'lg'} />
    </div>
  )
}

interface IProductCard {
  image: any;
  heading: string;
  subheading: string;
}

const ProductCard: React.FC<IProductCard> = ({
  image,
  heading,
  subheading,
}) => {
  return (
    <div>
      <StyledCardContainer>
        <StyledPhoto style={{ backgroundImage: `url(${image})` }} />
        <Spacer size={'sm'} />
        <H4 align={'center'} color={colors.white}>{heading}</H4>
        <Spacer size={'sm'} />
        <P2 align={'center'} color={colors.white}>{subheading}</P2>
      </StyledCardContainer>
      <Spacer size={'md'} />
    </div>
  )
}

const StyledCardContainer = styled.div`
  background: ${colors.grey};
  border: 1px solid ${colors.blue};
  border-radius: 10px;
  margin: 0 auto;
  padding: ${GU * 6}px;
  transition: all .3s ease;
  width: ${GU * 75}px;

  ${media.xs`
    width: ${GU * 100}px;
  `}

  ${media.sm`
    padding: ${GU * 8}px;
    width: ${GU * 150}px;
  `}

  ${media.md`
    width: ${GU * 95}px;
  `}

  ${media.lg`
    width: ${GU * 145}px;
  `}

  ${media.xl`
    width: ${GU * 215}px;
  `}
`

const StyledPhoto = styled.div`
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
  height: ${GU * 30}px;
  wdith: 100%;

  ${media.xs`
    height: ${GU * 40}px;
  `}

  ${media.lg`
    height: ${GU * 50}px;
  `}

  ${media.xl`
    height: ${GU * 80}px;
  `}
`
