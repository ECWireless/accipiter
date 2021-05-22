import { Magic } from '@magic-sdk/admin'
import CookieService from 'lib/cookie'

export default async function logout(req, res) {
  if (req.method !== 'POST') return res.status(405).end()

  try {
    const publicAddress = await req.headers.authorization.split('Bearer').pop().trim()
    const magicAdmin = new Magic(process.env.MAGIC_SECRET_KEY);
    await magicAdmin.users.logoutByPublicAddress(publicAddress);
    CookieService.removeTokenCookie(res);
  } catch (err) {
    console.error(err)
  }

  res.writeHead(302, { Location: '/' })
  res.end()
}
