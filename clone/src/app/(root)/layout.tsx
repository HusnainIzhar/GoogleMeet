import React, { ReactNode } from "react";
import StreamProvider from "../../providers/StreamClientProvider";
type Props = {};

const RootLayout = ({ children }: Readonly<{ children: ReactNode }>) => {
  return (
    <div className="w-full">
      <StreamProvider>{children}</StreamProvider>
    </div>
  );
};

export default RootLayout;
