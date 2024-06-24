import React, { FC } from "react";

type Props = {
  icon: React.ReactNode;
  title: string;
  subtitle: string;
};

const Card: FC<Props> = ({ icon, title, subtitle }) => {
  return (
    <div className="text-theme-textInactive hover:text-theme-textActive w-full md:w-[309px] h-[120px] border border-theme-3 rounded-lg bg-theme-2 p-5 flex gap-5 hover:cursor-pointer items-center">
      <div className="p-2 bg-theme-dark rounded-lg flex-1  flex items-center justify-center border border-theme-3 max-w-10 h-10">
        {icon}
      </div>
      <div className="flex flex-col gap-5 h-16 px-2">
        <h3 className=" text-xl font-semibold">{title}</h3>
        <h4 className=" text-xs">{subtitle}</h4>
      </div>
    </div>
  );
};

export default Card;
