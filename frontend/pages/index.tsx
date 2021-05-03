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
    subheading,
    subheadingExtraText1,
    subheadingExtraText2,
    subheadingExtraText3,
    subheadingExtraText4,
   } = homeProps

  return (
    <div>
      <Head>
        <title>Accipiter Systems | United States</title>
      </Head>

      <main>
        <Hero
          subheading={subheading}
          subheadingExtraText1={subheadingExtraText1}
          subheadingExtraText2={subheadingExtraText2}
          subheadingExtraText3={subheadingExtraText3}
          subheadingExtraText4={subheadingExtraText4}
        />
        <OurTech />
        <Products />
        <Partners />
        <Contact />
      </main>
    </div>
  )
}

export const getServerSideProps: GetServerSideProps = async () => {
  const homeProps = await client.fetch(`*[_type == "home" && slug.current == "v1"][0] {
		subheading,
    subheadingExtraText1,
    subheadingExtraText2,
    subheadingExtraText3,
    subheadingExtraText4,
	}`)
	return {
	  props: { homeProps },
	}
}

export default Home
