// [slug] dynamic route (id or username etc)
// (group) ignored by routing system

// From NextJS 13.2 -
// Previous Next.js data fetching methods such as getServerSideProps, getStaticProps,
// and getInitialProps are not supported in the new app directory.

// New Cache Methods
// This request should be cached until manually invalidated.
// Similar to `getStaticProps`.
// `force-cache` is the default and can be omitted.
// const staticData = await fetch(`https://...`, { cache: 'force-cache' });

// This request should be refetched on every request.
// Similar to `getServerSideProps`.
// const dynamicData = await fetch(`https://...`, { cache: 'no-store' });

// This request should be cached with a lifetime of 10 seconds.
// Similar to `getStaticProps` with the `revalidate` option.
// const revalidatedData = await fetch(`https://...`, {
//   next: { revalidate: 10 },
// });

export const revalidate = 30; // revalidate this page every 30 seconds

import { groq } from "next-sanity";
import { client } from "../lib/sanity.client";

const pageInfoQuery = groq`
*[_type == "pageInfo"]{
 ...,
  socials[]->
} | order(_updatedAt desc)`;

const freelanceQuery = groq`
*[_type == "experience"]{
 ...,
 technologies[]->
}| order(_updatedAt desc)`;

const projectQuery = groq`
*[_type == "project"]{
 ...,
technologies[]->, 
} | order(_updatedAt desc)`;

const skillsQuery = groq`
*[_type == "skill"]{
 ...,
}`;

import Hero from "@/components/Hero/Hero";
import AboutMe from "@/components/AboutMe/AboutMe";
import FreelanceWork from "@/components/FreelanceWork/FreelanceWork";
import PracticeProjects from "@/components/PracticeProjects/PracticeProjects";
import Skills from "@/components/Skills/Skills";
import ContactMe from "@/components/ContactMe/ContactMe";

export const metadata = {
  title: "Bralen's Porfolio ",
};

export default async function Home() {
  const pageInfo = await client.fetch(pageInfoQuery);
  // const pageInfo = await client.fetch(pageInfoQuery, {
  //   next: { revalidate: 10 },
  // });
  const pageInfoo = pageInfo[0];

  const freelances = await client.fetch(freelanceQuery);

  const skills = await client.fetch(skillsQuery);

  const projects = await client.fetch(projectQuery);

  return (
    <div
      className="h-[700px] md:h-[800px] snap-y snap-mandatory overflow-y-scroll overflow-x-hidden
    scrollbar scrollbar-track-[#e5e5e5] scrollbar-thumb-[#588157]/50"
    >
      {/* Header in Layout */}
      {/* Header */}

      {/* Hero */}
      <section id="hero" className="snap-start">
        <Hero pageInfoo={pageInfoo} />
      </section>

      {/* About*/}
      <section id="about" className="snap-start">
        <AboutMe pageInfoo={pageInfoo} />
      </section>

      {/* Work Experience */}
      <section id="freelance" className="snap-start">
        <FreelanceWork freelances={freelances} />
      </section>

      {/* Practice Projects */}
      <section id="projects" className="snap-start">
        <PracticeProjects projects={projects} />
      </section>

      {/* Skills */}
      <section id="skills" className="snap-start">
        <Skills skills={skills} />
      </section>

      {/* Contact Me */}
      <section id="contact" className="snap-start">
        <ContactMe />
      </section>
    </div>
  );
}
