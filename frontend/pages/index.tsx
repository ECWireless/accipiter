import Head from 'next/head'
import { GetServerSideProps } from 'next'
import imageUrlBuilder from '@sanity/image-url'
import client from 'client';

import {
  Hero,
  OurTech,
  Products,
  Partners,
  Contact
} from 'views/home';

const Home: React.FC = ({ homeProps }: { [key: string]: any} ) => {
  const {
		heroSubheading,
    heroAnimatedText1,
    heroAnimatedText2,
    heroAnimatedText3,
    heroAnimatedText4,
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
   } = homeProps

  return (
    <div>
      <Head>
        <title>Accipiter Systems | United States</title>
      </Head>

      <main>
        <Hero
          heroSubheading={heroSubheading}
          heroAnimatedText1={heroAnimatedText1}
          heroAnimatedText2={heroAnimatedText2}
          heroAnimatedText3={heroAnimatedText3}
          heroAnimatedText4={heroAnimatedText4}
        />
        <OurTech
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
        <Products
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
        />
        <Partners />
        <Contact />
      </main>
    </div>
  )
}

function urlFor(source) {
  return imageUrlBuilder(client).image(source)
}

export const getServerSideProps: GetServerSideProps = async () => {
  const homeProps = await client.fetch(`*[_type == "home" && slug.current == "v1"][0] {
		heroSubheading,
    heroAnimatedText1,
    heroAnimatedText2,
    heroAnimatedText3,
    heroAnimatedText4,
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
	}`)
	return {
	  props: { homeProps },
	}
}

export default Home
