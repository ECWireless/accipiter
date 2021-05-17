import Head from 'next/head'
import { GetServerSideProps } from 'next'
import client from 'client';

import { JobSpecification } from 'views/careers'
import Spacer from 'components/Spacer'

const Careers: React.FC = () => {
  return (
    <div>
      <Head>
        <title>Accipiter Systems | United States</title>
      </Head>
      <main>
        <Spacer size={'md'} />
        <JobSpecification
          jobSpecificationHeading={'Careers'}
          jobSpecificationSubheading={'Apply for a position'}
        />
        <Spacer size={'md'} />
      </main>
    </div>
  )
}
    
export default Careers
    