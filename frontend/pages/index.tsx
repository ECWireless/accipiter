import Head from 'next/head'
import { GetServerSideProps } from 'next'
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
        <Products />
        <Partners />
        <Contact />
      </main>
    </div>
  )
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
	}`)
	return {
	  props: { homeProps },
	}
}

export default Home
