"use client";

import { SessionProvider } from "next-auth/react";
import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

const Providers = ({ children }: Props) => {
  return (
    <SessionProvider>
      <div className="min-h-screen">{children}</div>
    </SessionProvider>
  );
};

export default Providers;
