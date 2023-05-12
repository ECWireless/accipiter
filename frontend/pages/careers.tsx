import Head from "next/head";
import client from "client";

import { ApplicationForm, JobSpecification } from "views/careers";
import Spacer from "components/Spacer";

const Careers: React.FC = ({ careersProps }: { [key: string]: any }) => {
  const {
    heading,
    subheading,
    position1Title,
    position1Description,
    position2Title,
    position2Description,
    position3Title,
    position3Description,
  } = careersProps;

  return (
    <div>
      <Head>
        <title>Careers | Accipiter Systems</title>
      </Head>
      <main>
        <Spacer size={"md"} />
        <JobSpecification
          heading={heading}
          subheading={subheading}
          position1Title={position1Title}
          position1Description={position1Description}
          position2Title={position2Title}
          position2Description={position2Description}
          position3Title={position3Title}
          position3Description={position3Description}
        />
        <Spacer size={"md"} />
        <ApplicationForm />
        <Spacer size={"lg"} />
      </main>
    </div>
  );
};

const { DEPLOYMENT_ENVIRONMENT } = process.env;

export const getStaticProps = async () => {
  const careersProps =
    await client.fetch(`*[_type == "careers" && slug.current == "${DEPLOYMENT_ENVIRONMENT}"][0] {
    heading,
		subheading,
    position1Title,
    position1Description,
    position2Title,
    position2Description,
    position3Title,
    position3Description,
	}`);
  return {
    props: { careersProps, revalidate: 10 },
  };
};

export default Careers;
