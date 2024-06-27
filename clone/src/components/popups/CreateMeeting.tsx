"use client";
import { useUser } from "@clerk/nextjs";
import { Call, useStreamVideoClient } from "@stream-io/video-react-sdk";
import { useRouter } from "next/navigation";
import React, { ChangeEvent, useState } from "react";
import { toast } from "react-toastify";

type Props = {};

const CreateMeeting = (props: Props) => {
  const [checked, setChecked] = useState(false);
  const handleCheck = (e: ChangeEvent<HTMLInputElement>) => {
    setChecked(e.target.checked);
  };
  const { user } = useUser();
  const router = useRouter();
  const client = useStreamVideoClient();
  const [values, setValues] = useState({
    dateTime: new Date(),
    description: "",
    link: "",
  });
  const [callDetails, setCallDetails] = useState<Call>();

  const handleNewMeeting = async () => {
    if (!client || !user) return;
    try {
      const id = crypto.randomUUID();
      const call = client.call("default", id);
      const startDate =
        values.dateTime.toISOString() || new Date(Date.now()).toISOString();
      const description = values.description || "Instant meeting";
      if (!call) throw new Error("Failed to create call!");
      await call.getOrCreate({
        data: {
          starts_at: startDate,
          custom: {
            description,
          },
        },
      });
      setCallDetails(call);

      if (!values.description) {
        router.push(`/meeting/${call.id}`);
        toast.success("Meeting Created");
      }
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <div className="w-96 mt-3">
      <input
        type="checkbox"
        name="description"
        id="description"
        onChange={handleCheck}
      />
      <label htmlFor="description" className=" text-theme-textInactive ml-5">
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
      <button
        onClick={handleNewMeeting}
        className="px-3 py-2 rounded-lg mt-3 border border-theme-3 bg-theme-dark text-theme-textInactive hover:text-theme-textActive"
      >
        Create meeting
      </button>
    </div>
  );
};

export default CreateMeeting;
