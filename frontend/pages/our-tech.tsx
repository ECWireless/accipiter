import Head from "next/head";
import client from "client";

import Spacer from "components/Spacer";

import { OurTech as OurTechSection } from "views/home";

const OurTech: React.FC = ({ ourTechProps }: { [key: string]: any }) => {
  const {
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
  } = ourTechProps;

  return (
    <div>
      <Head>
        <title>Our Tech | Accipiter Systems</title>
      </Head>

      <main>
        <Spacer size={"md"} />
        <OurTechSection
          topLine={false}
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
      </main>
    </div>
  );
};

export const getStaticProps = async () => {
  const ourTechProps =
    await client.fetch(`*[_type == "home" && slug.current == "v1"][0] {
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
	}`);
  return {
    props: { ourTechProps, revalidate: 10 },
  };
};

export default OurTech;
