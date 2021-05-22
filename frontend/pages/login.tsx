import { useRouter } from 'next/router';
import { Magic } from 'magic-sdk'

import Spacer from 'components/Spacer';

const Login: React.FC = () => {
  const router = useRouter()

  const handleSubmit = async (event) => {
    event.preventDefault()

    const { elements } = event.target

    const did = await new Magic(process.env.MAGIC_PUBLISHABLE_KEY)
      .auth
      .loginWithMagicLink({ email: elements.email.value })

    // Once we have the token from magic,
    // update our own database

    const authRequest = await fetch('/api/login', {
      method: 'POST',
      headers: { Authorization: `Bearer ${did}` }
    })
  
    if (authRequest.ok) {
      // We successfully logged in, our API
      // set authorization cookies and now we
      // can redirect to the dashboard!
      router.push('/portal')
    } else { /* handle errors */ }
  }

  return (
    <div>
      <Spacer size={'lg'} />
      <form onSubmit={handleSubmit}>
        <label htmlFor="email">Email</label>
        <input name="email" type="email" />
        <button>Log in</button>
      </form>
    </div>
  )
}
  
export default Login
    