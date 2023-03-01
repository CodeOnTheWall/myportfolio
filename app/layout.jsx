// Note from NextJS 13:
// To improve the performance of your application, we recommend moving Client Components
// to the leaves of your component tree where possible. For example, you may have a Layout
// that has static elements (e.g. logo, links, etc) and an interactive search bar that
// uses state. Instead of making the whole layout a Client Component, move the interactive
// logic to a Client Component (e.g. <SearchBar />) and keep your layout as a Server
// Component. This means you don't have to send all the component Javascript of the
// layout to the client.

// Also:
// Use layout.js to define UI that is shared across multiple routes.
// each page folder could have their own layout for that route

export const metadata = {
  title: "Bralen's Portfolio",
  description:
    "The projects, experience, and contact information for junior full stack developer Bralen Sundquist",
};

import "./globals.css";

import Header from "@/components/Hero/Header";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-[#457b9d]">
        <Header />
        {children}
      </body>
    </html>
  );
}
