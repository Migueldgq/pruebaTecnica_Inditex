"use client";

// LoadingContext.js
import { createContext, useEffect, useState } from "react";
import usePodcast from "../Hook/UsePodcast";

export const LoadingContext = createContext();

export const LoadingProvider = ({ children }) => {
  const { isLoading: initialIsLoading } = usePodcast();
  const [isLoading, setIsLoading] = useState(initialIsLoading);

  useEffect(() => {
    setIsLoading(initialIsLoading);
  }, [initialIsLoading]);


  return (
    <LoadingContext.Provider value={{ isLoading, setIsLoading }}>
      {children}
    </LoadingContext.Provider>
  );
};
