import sanityClient from '@sanity/client'
import imageUrlBuilder from '@sanity/image-url'

const projectData = {
// Find your project ID and dataset in `sanity.json` in your studio project
  projectId: '39w1yj5p',
  dataset: 'production',
  useCdn: true
  // useCdn == true gives fast, cheap responses using a globally distributed cache.
  // Set this to false if your application require the freshest possible
  // data always (potentially slightly slower and a bit more expensive).
}

const configuredSanityClient = sanityClient(projectData)

const builder = imageUrlBuilder(configuredSanityClient)
// for building imageUrls out of image reference data
function urlFor(source) {
  return builder.image(source)
}

export { configuredSanityClient, urlFor}
