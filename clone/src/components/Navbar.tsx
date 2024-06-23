import { Menu, Video } from "lucide-react";
import React from "react";
import DropDown from "./DropDown";

type Props = {};

const Navbar = (props: Props) => {

  return (
    <div className="w-full h-16 text-theme-textActive bg-theme-2 border-b border-theme-3 px-16 flex items-center justify-between">
      <h1 className="text-xl font-semibold flex items-center gap-2">
        <Video />
        Chime
      </h1>
      <div className="max:hidden">
        {" "}
        <Menu />
        <DropDown/>
      </div>
    </div>
  );
};

export default Navbar;
