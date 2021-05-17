import sanityClient from '@sanity/client'

export default sanityClient({
  projectId: process.env.SANITY_PROJECT_ID,
  dataset: 'production',
  apiVersion: '2021-05-12',
  useCdn: true
})
