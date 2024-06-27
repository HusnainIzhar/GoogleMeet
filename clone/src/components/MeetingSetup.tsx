"use client";
import {
  DeviceSettings,
  VideoPreview,
  useCall,
} from "@stream-io/video-react-sdk";
import { Mic, MicOff, Video, VideoOff } from "lucide-react";
import React, { useEffect, useState } from "react";

type Props = {};

const MeetingSetup = (props: Props) => {
  const [mic, setMic] = useState(false);
  const [cam, setCam] = useState(false);
  const call = useCall();

  useEffect(() => {
    if (mic) {
      call?.microphone.enable();
    } else {
      call?.microphone.disable();
    }
    if (cam) {
      call?.camera.enable();
    } else {
      call?.camera.disable();
    }
  }, [mic, cam, call?.camera, call?.microphone]);

  if (!call) throw new Error("useCall must be Called by Stream");
  return (
    <div className="flex h-screen w-full  flex-col items-center justify-center gap-3 text-theme-textInactive">
      <h1 className="text-2xl font-bold">Setup</h1>
      <VideoPreview />
      <div>
        <div className="flex gap-5">
          <div
            className="hover:cursor-pointer p-2 rounded-full bg-theme-4"
            onClick={() => setMic(!mic)}
          >
            {mic ? <Mic /> : <MicOff />}
          </div>
          <div
            className="hover:cursor-pointer p-2 rounded-full bg-theme-4"
            onClick={() => setCam(!cam)}
          >
            {cam ? <Video /> : <VideoOff />}
          </div>
        </div>
        <DeviceSettings />
        <button></button>
      </div>
    </div>
  );
};

export default MeetingSetup;
