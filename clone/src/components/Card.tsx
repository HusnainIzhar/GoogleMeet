import React, { FC } from "react";

type Props = {
  icon: React.ReactNode;
  title: string;
  subtitle: string;
};

const Card: FC<Props> = ({ icon, title, subtitle }) => {
  return (
    <div className="w-[309px] h-[309px] border border-theme-3 rounded-lg bg-theme-2 p-5 flex-col flex gap-5 hover:cursor-pointer">
      <div className="p-2 bg-theme-dark rounded-lg flex-1  flex items-center justify-center border border-theme-3 text-theme-textActive">
        {icon}
      </div>
      <div className="flex flex-col gap-5 h-16 px-2">
        <h3 className="text-theme-textActive text-xl font-semibold">{title}</h3>
        <h4 className="text-theme-textActive text-xs">{subtitle}</h4>
      </div>
    </div>
  );
};

export default Card;
