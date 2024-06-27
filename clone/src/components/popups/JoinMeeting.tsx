import React, { useState, ChangeEvent } from "react";

type Props = {};

const JoinMeeting = (props: Props) => {
  const [checked, setChecked] = useState(false);
  const handleCheck = (e: ChangeEvent<HTMLInputElement>) => {
    setChecked(e.target.checked);
  };
  return (
    <div className="w-96 mt-3">
        <p className=" text-theme-textInactive">Paste meeting link below</p>
      <input type="text" className=" mt-3 w-full rounded-lg border border-theme-3 bg-theme-2 p-2 outline-none text-theme-textInactive"/>
      <br />
      <button className="px-3 py-2 rounded-lg mt-3 border border-theme-3 bg-theme-dark text-theme-textInactive hover:text-theme-textActive">
        Join meeting
      </button>
    </div>
  );
};

export default JoinMeeting;
