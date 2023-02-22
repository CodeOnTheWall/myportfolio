// [slug] dynamic route (id or username etc)
// (group) ignored by routing system

import { previewData } from "next/headers";
import { groq } from "next-sanity";
import { client } from "../lib/sanity.client";

export const revalidate = 30; // revalidate this page every 60 seconds

const pageInfoQuery = groq`
*[_type == "pageInfo"]{
  name,
  role,
  heroImage,
  backgroundInformation,
  profilePic,
  phoneNumber,
  email,
  address,
  socials[]->
}`;
const skillsQuery = groq`
*[_type == "skill"]{
 ...,
}`;
const experienceQuery = groq`
*[_type == "experience"]{
 ...,
 technologies[]->
}`;
const projectQuery = groq`
*[_type == "project"]{
 ...,
  technologies[]->, 
}`;

import Hero from "@/components/Hero";
import About from "@/components/About";
import WorkExperience from "@/components/WorkExperience";
import PracticeProjects from "@/components/PracticeProjects";
import Skills from "@/components/Skills";
import ContactMe from "@/components/ContactMe";
import PreviewSuspense from "@/components/PreviewSuspense";

export default async function Home() {
  const pageInfo = await client.fetch(pageInfoQuery, {
    next: { revalidate: 10 },
  });
  const pageInfoo = pageInfo[0];

  const experiences = await client.fetch(experienceQuery);

  const skills = await client.fetch(skillsQuery);

  const projects = await client.fetch(projectQuery);

  return (
    <div
      className=" text-white h-screen snap-y snap-mandatory overflow-y-scroll
       overflow-x-hidden z-40 scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#023e8a]/50"
    >
      {/* Header in Layout */}
      {/* Header */}

      {/* Hero */}
      <section id="hero" className="snap-start">
        <Hero pageInfoo={pageInfoo} />
      </section>

      {/* About*/}
      <section id="about" className="snap-center">
        <About pageInfoo={pageInfoo} />
      </section>

      {/* Work Experience */}
      <section id="freelance" className="snap-center">
        <WorkExperience experiences={experiences} />
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
      <section id="contact" className="snap-center">
        <ContactMe />
      </section>
    </div>
  );
}
