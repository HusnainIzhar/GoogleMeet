"use client";
import { sidebarData } from "@/constants";
import { usePathname, useRouter } from "next/navigation";
import React, { FC, useState } from "react";

type Props = {};
const SideBar: FC<Props> = () => {
  const [show, setShow] = useState(false);
  const router = useRouter();
  const path = usePathname();
  return (
    <section
      className={`max-w-[264px] transition-all duration-700 overflow-hidden ${
        show ? "w-[264px]" : "w-16"
      } border-r border-theme-3 h-[calc(100vh-64px)] bg-theme-2 text-theme-textActive flex flex-col gap-6 px-2 pt-5`}
      onMouseEnter={() => setShow(true)}
      onMouseLeave={() => setShow(false)}
    >
      {sidebarData.map((i, k) => {
        const isActive = path === i.route || path.startsWith(`${i.route}/`);

        return (
          <div
            onClick={() => router.push(i.route)}
            key={k}
            className={`flex gap-2 items-center hover:cursor-pointer hover:text-theme-textActive ${
              isActive
                ? "bg-theme-dark border border-theme-3 text-theme-textActive"
                : "text-theme-textInactive"
            }  p-3 rounded-lg`}
          >
            <div className="min-w-10"> {i.icon}</div>
           
            {show && <p className=" text-nowrap">{i.label}</p>}
          </div>
        );
      })}
    </section>
  );
};

export default SideBar;
