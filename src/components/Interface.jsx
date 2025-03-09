import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { About } from "./About";
import { Contacts } from "./Contacts";
import { Music } from "./Music";
import Projects from "./Projects";
import { Skills } from "./Skills";
import { motion, useInView } from "framer-motion";
import { useSection } from "../context/SectionContext";
import { useEffect, useRef } from "react";
import { useScroll } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";

const queryClient = new QueryClient();

const Section = (props) => {
  const scroll = useScroll();
  const ref = useRef(null);
  const { children, className, sectionIndex } = props;
  const isInView = useInView(ref, { margin: "-25% 0px -25% 0px" });
  const isScrolling = useRef(false);

  const { setSection } = useSection();
  useFrame(() => {
    if (scroll.delta !== 0) {
      isScrolling.current = true;
    } else if (isScrolling.current && isInView) {
      setSection(sectionIndex);
      isScrolling.current = false;
    }
  });

  return (
    <section
      ref={ref}
      className={`border-2 h-dvh w-screen p-8 max-w-screen-2xl mx-auto flex ${className}`}
      animate={{

      }}
      transition={{ type: "spring", stiffness: 100, damping: 20 }}
    >
      {children}
    </section>
  );
};

export const Interface = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <div className="h-screen">
        <Section
          sectionIndex={1}
          className="flex-col items-center justify-center"
        >
          <h1>Tammuahe</h1>
        </Section>
        <Section sectionIndex={2}>
          <About />
        </Section>
        <Section sectionIndex={3}>
          <Skills />
        </Section>
        <Section sectionIndex={4}>
          <Projects />
        </Section>
        <Section sectionIndex={5}>
          <Music />
        </Section>
        <Section sectionIndex={6}>
          <Contacts />
        </Section>
      </div>
    </QueryClientProvider>
  );
};
