import React from "react";
import Head from "next/head";
import { GetServerSideProps } from "next";
import client from "client";

import useAuth from "hooks/useAuth";

import { Portal as PortalView } from "views/portal";
import Spacer from "components/Spacer";

interface IPortalProps {
  portalProps: any[];
  loginProps: any[];
}

const Portal: React.FC<IPortalProps> = ({ portalProps, loginProps }) => {
  const { user, loading } = useAuth();
  const [email, setEmail] = React.useState<string>("");

  React.useEffect(() => {
    if (!user) return;
    const emails = loginProps.map((data: { title: string }) => {
      return data.title;
    });
    const matchingEmails = emails.filter((email) => {
      if (email.toLowerCase() === user.email.toLowerCase()) {
        return email;
      }
    });

    if (matchingEmails.length > 0) {
      setEmail(matchingEmails[0]);
    }
  }, [user]);

  return (
    <div>
      <Head>
        <title>Portal | Accipiter Systems</title>
        <script
          dangerouslySetInnerHTML={{
            __html: `
          if (!document.cookie.includes('authed')) {
            window.location.href = "/"
          }
        `,
          }}
        />
      </Head>
      {user ? (
        <main>
          <Spacer size={"md"} />
          <PortalView
            email={email}
            portalProps={portalProps}
            user={user}
            loading={loading}
          />
        </main>
      ) : (
        <main>
          <Spacer size={"lg"} />
          <Spacer size={"lg"} />
          <Spacer size={"lg"} />
          <Spacer size={"lg"} />
          <Spacer size={"lg"} />
          <Spacer size={"lg"} />
          <Spacer size={"lg"} />
          <Spacer size={"lg"} />
        </main>
      )}
    </div>
  );
};

export const getServerSideProps: GetServerSideProps = async () => {
  const portalProps = await client.fetch(`*[_type == "pdfs"]`);
  const loginProps = await client.fetch(`*[_type == "emails"]`);
  return {
    props: { portalProps, loginProps },
  };
};

export default Portal;
