import React from 'react';
import Head from 'next/head';
import { GetServerSideProps } from 'next'
import client from 'client';

import useAuth from 'hooks/useAuth';

import { Portal as PortalView} from 'views/portal'
import Spacer from 'components/Spacer';

interface IPortalProps {
  portalProps: any[];
}

const Portal: React.FC<IPortalProps> = ({ portalProps }) => {
  const { user, loading } = useAuth();

  return (
    <div>
      <Head>
        <script dangerouslySetInnerHTML={{ __html: `
          if (!document.cookie.includes('authed')) {
            window.location.href = "/"
          }
        ` }} />
      </Head>
      {user ? (
        <main>
          <Spacer size={'md'} />
          <PortalView portalProps={portalProps} user={user} loading={loading} />
        </main>
      ) : (
        <main>
          <Spacer size={'lg'} />
          <Spacer size={'lg'} />
          <Spacer size={'lg'} />
          <Spacer size={'lg'} />
          <Spacer size={'lg'} />
          <Spacer size={'lg'} />
          <Spacer size={'lg'} />
          <Spacer size={'lg'} />
        </main>
      )}
    </div>
  )
}

export const getServerSideProps: GetServerSideProps = async () => {
  const portalProps = await client.fetch(`*[_type == "pdfs"]`)
	return {
	  props: { portalProps },
	}
}
  
export default Portal
    