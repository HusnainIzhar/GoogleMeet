import React, { ChangeEvent, useEffect, useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

type Props = {};

const ScheduleMeeting = (props: Props) => {
  const [checked, setChecked] = useState(false);
  const [currentDateTime, setCurrentDateTime] = useState<Date | null>(null);

  useEffect(() => {
    const now = new Date();
    // Set Pakistan time (UTC+5)
    now.setHours(now.getHours() + 5);
    setCurrentDateTime(now);
  }, []);

  const handleCheck = (e: ChangeEvent<HTMLInputElement>) => {
    setChecked(e.target.checked);
  };

  const handleDateChange = (date: Date | null) => {
    setCurrentDateTime(date);
  };

  return (
    <div className="w-96 mt-3">
      <input
        type="checkbox"
        name="description"
        id="description"
        onChange={handleCheck}
      />
      <label htmlFor="description" className="text-theme-textInactive ml-5">
        Add description
      </label>
      <br />
      {checked && (
        <textarea
          name=""
          id=""
          className="w-full mt-3 rounded-lg border border-theme-3 bg-theme-2 text-theme-textInactive p-2 outline-none"
        ></textarea>
      )}
      <br />
      <label htmlFor="start-time" className="text-theme-textInactive">
        Start time
      </label>
    
      <DatePicker
        selected={currentDateTime}
        onChange={handleDateChange}
        showTimeSelect
        dateFormat="MMMM d, yyyy h:mm aa"
        className="ml-5 w-full mt-2 rounded-lg border border-theme-3 bg-theme-2 text-theme-textInactive p-2 outline-none"
      />
      <br />
      <button className="px-3 py-2 rounded-lg mt-3 border border-theme-3 bg-theme-dark text-theme-textInactive hover:text-theme-textActive">
        Schedule meeting
      </button>
    </div>
  );
};

export default ScheduleMeeting;
