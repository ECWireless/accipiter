import React from 'react';
import Head from 'next/head';
import { GetServerSideProps } from 'next'
import client from 'client';

import { Login as LoginView } from 'views/login';
import Spacer from 'components/Spacer';

const Login: React.FC = ({ loginProps }: { [key: string]: any}) => {
  const [emails, setEmails] = React.useState<string[]>([]);
  React.useEffect(() => {
    const emails = loginProps.map((data: { title: string }) => {
      return data.title;
    })
    setEmails(emails);
  }, []);
  return (
    <div>
      <Head>
        <title>Login | Accipiter Systems</title>
      </Head>
      <main>
        <Spacer size={'md'} />
        <LoginView emails={emails} />
      </main>
    </div>
  )
}

export const getServerSideProps: GetServerSideProps = async () => {
  const loginProps = await client.fetch(`*[_type == "emails"]`)
	return {
	  props: { loginProps },
	}
}
  
export default Login
    