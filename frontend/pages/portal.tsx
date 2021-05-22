import React from 'react';
import { useRouter } from 'next/router';
import Head from 'next/head';

import useAuth from 'hooks/useAuth';

import Spacer from 'components/Spacer';

const Portal: React.FC = () => {
  const router = useRouter()
  const { user, loading } = useAuth();

  const onLogout = async () => {
    if (!user) return;
    
    const authRequest = await fetch('/api/logout', {
      method: 'POST',
      headers: { Authorization: `Bearer ${user.publicAddress}` }
    })
  
    if (authRequest.ok) {
      // We successfully logged in, our API
      // set authorization cookies and now we
      // can redirect to the dashboard!
      router.push('/')
    } else { /* handle errors */ }
  }

  return (
    <>
      <Head>
        <script dangerouslySetInnerHTML={{ __html: `
          if (!document.cookie.includes('authed')) {
            window.location.href = "/"
          }
        ` }} />
      </Head>
      {user ? <div>
        <Spacer size={'lg'} />
        <h1>Portal</h1>
        {loading ? "Loading..." : user.email}
        <Spacer size={'md'} />
        <button onClick={onLogout}>Logout</button>
      </div> : (
        <div>
          <Spacer size={'lg'} />
          <Spacer size={'lg'} />
          <Spacer size={'lg'} />
          <Spacer size={'lg'} />
          <Spacer size={'lg'} />
          <Spacer size={'lg'} />
          <Spacer size={'lg'} />
          <Spacer size={'lg'} />
        </div>
      )}
    </>
  )
}
  
export default Portal
    