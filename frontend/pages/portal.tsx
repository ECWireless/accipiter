import React from 'react';
import Head from 'next/head';

import useAuth from 'hooks/useAuth';

import { Portal as PortalView} from 'views/portal'
import Spacer from 'components/Spacer';

const Portal: React.FC = () => {
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
          <PortalView user={user} loading={loading} />
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
  
export default Portal
    