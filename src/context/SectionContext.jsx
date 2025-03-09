import React, { createContext, useContext, useEffect, useState } from "react";

const SectionContext = createContext();

export const SectionProvider = ({ children }) => {
  const [section, setSection] = useState(0);
  useEffect(() => {
    if (section) {
      console.log("section:", section);
    }
  }, [section]);
  return (
    <SectionContext.Provider value={{ section, setSection }}>
      {children}
    </SectionContext.Provider>
  );
};

export const useSection = () => {
  const context = useContext(SectionContext);
  if (!context) {
    throw new Error("useSection must be used within a SectionProvider");
  }
  return context;
};
