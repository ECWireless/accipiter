import Head from 'next/head'
import { GetServerSideProps } from 'next'
import client from 'client';

import { ApplicationForm, JobSpecification } from 'views/careers'
import Spacer from 'components/Spacer'

const Careers: React.FC = ({ careersProps }: { [key: string]: any} ) => {
  const {
    heading,
		subheading,
    positionTitle,
    positionDescription,
   } = careersProps

  return (
    <div>
      <Head>
        <title>Careers | Accipiter Systems</title>
      </Head>
      <main>
        <Spacer size={'md'} />
        <JobSpecification
          heading={heading}
          subheading={subheading}
          positionTitle={positionTitle}
          positionDescription={positionDescription}
        />
        <Spacer size={'md'} />
        <ApplicationForm />
        <Spacer size={'lg'} />
      </main>
    </div>
  )
}


export const getServerSideProps: GetServerSideProps = async () => {
  const careersProps = await client.fetch(`*[_type == "careers" && slug.current == "v1"][0] {
    heading,
		subheading,
    positionTitle,
    positionDescription,
	}`)
	return {
	  props: { careersProps },
	}
}
    
export default Careers
    