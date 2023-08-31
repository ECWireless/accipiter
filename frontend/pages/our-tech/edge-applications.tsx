import Head from "next/head";
import Spacer from "components/Spacer";

const EdgeApplications: React.FC = () => {
  return (
    <>
      <Head>
        <title>Edge Applications | Accipiter Systems</title>
      </Head>
      <article>
        <Spacer size={"lg"} />
        <Spacer size={"md"} />
        <div>
          <div>FalconX</div>
          <div>Edge Applications</div>
        </div>
        <div>Summary</div>
        <div>Benefits</div>
        <div>Use cases</div>
      </article>
    </>
  );
};

export default EdgeApplications;
