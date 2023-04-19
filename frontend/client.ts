import { createClient } from 'next-sanity';

const token = process.env.SANITY_TOKEN;

export default createClient({
  projectId: process.env.SANITY_PROJECT_ID,
  dataset: 'production',
  apiVersion: '2021-05-12',
  useCdn: false,
  token,
  ignoreBrowserTokenWarning: true,
})
