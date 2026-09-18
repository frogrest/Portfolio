import React from "react";
import { MainLayout } from "./layouts/MainLayout";
import { Hero } from "./sections/Hero";
import { About } from "./sections/About";
import { Skills } from "./sections/Skills";
import { Projects } from "./sections/Projects";
import { Gallery } from "./sections/Gallery";
import { Experience } from "./sections/Experience";
import { Education } from "./sections/Education";
import { Contact } from "./sections/Contact";
import { DotField } from "./components/react-bits/DotField";

export const App: React.FC = () => {
  return (
    <MainLayout>
      {/* 1 & 2. Main Background & Double Hero with ScrollExpand */}
      <Hero />

      {/* Sections below Hero with Dot Field ambient background */}
      <div className="relative w-full overflow-hidden">
        <DotField />

        {/* Structured Sections Container with Consistent Spacing & Rhythm */}
        <div className="max-w-6xl mx-auto px-4 sm:px-6 space-y-28 sm:space-y-36 relative z-10 pt-16 sm:pt-24">
          {/* 4. Profile / About Section with ProfileCard */}
          <About />

          {/* 5. Skills Section with FolderFloat */}
          <Skills />

          {/* 6. Projects Section with AccordionGallery */}
          <Projects />

          {/* 6. Hobbies / Personal Work with AccordionGallery */}
          <Gallery />

          {/* Experience & Journey */}
          <Experience />

          {/* Education */}
          <Education />

          {/* Contact Form & Channels */}
          <Contact />
        </div>
      </div>
    </MainLayout>
  );
};

export default App;
