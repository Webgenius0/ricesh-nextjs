"use client";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import { Toaster } from "react-hot-toast";

const queryClient = new QueryClient();

export default function Providers({ children }) {
  useEffect(() => {
    Aos.init({
      duration: 1000,
      once: true,
    });
  }, []);
  return (
    <QueryClientProvider client={queryClient}>
      {children}
      <Toaster />
    </QueryClientProvider>
  );
}
