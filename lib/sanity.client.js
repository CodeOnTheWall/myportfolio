import { createClient } from "next-sanity";
// import createImageUrlBuilder from "@sanity/image-url";

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID;
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET;
const apiVersion = process.env.NEXT_PUBLIC_SANITY_API_VERSION;

export const client = createClient({
  projectId,
  dataset,
  apiVersion, // https://www.sanity.io/docs/api-versioning
  //   useCdn: typeof document !== "undefined", // server-side is statically generated, the CDN is only necessary beneficial if queries are called on-demand
  //  if vercel url true
  useCdn: true,
});

// export const config = {
//   projectId,
//   dataset,
//   apiVersion, // https://www.sanity.io/docs/api-versioning
//   //   useCdn: typeof document !== "undefined", // server-side is statically generated, the CDN is only necessary beneficial if queries are called on-demand
//   //  if vercel url true
//   useCdn: false,
// };

// export const sanityClient = createClient(config);

// export const urlFor = (source) => createImageUrlBuilder(config).image(source);
