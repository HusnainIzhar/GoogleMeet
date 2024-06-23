import React, { ReactNode } from "react";
import { MetaData } from "@/utils/MetaData";
import Navbar from "@/components/Navbar";
import SideBar from "@/components/SideBar";

type Props = {};

<MetaData title="chime" description="app" />;

const RootLayout = ({ children }: Readonly<{ children: ReactNode }>) => {
  return (
    <main className="relative">
      <Navbar />

      <div className="flex">
        <SideBar />

        <section className="flex flex-1">
          <div className="w-full">{children}</div>
        </section>
      </div>
    </main>
  );
};

export default RootLayout;
