import Head from 'next/head'

import {
  Hero,
  OurTech,
  Products,
  Partners,
  Contact
 } from 'views/home';

const Home: React.FC = () => {
  return (
    <div>
      <Head>
        <title>Accipiter Systems | United States</title>
      </Head>

      <main>
        <Hero />
        <OurTech />
        <Products />
        <Partners />
        <Contact />
      </main>
    </div>
  )
}

export default Home
