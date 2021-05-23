import Head from 'next/head';

import { Login as LoginView } from 'views/login';
import Spacer from 'components/Spacer';

const Login: React.FC = () => {
  return (
    <div>
      <Head>
        <title>Login | Accipiter Systems</title>
      </Head>
      <main>
        <Spacer size={'md'} />
        <LoginView />
      </main>
    </div>
  )
}
  
export default Login
    