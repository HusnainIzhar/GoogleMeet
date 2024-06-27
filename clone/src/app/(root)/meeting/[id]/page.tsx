"use client"
import MeetingRoom from "@/components/MeetingRoom";
import MeetingSetup from "@/components/MeetingSetup";
import { useGetCallById } from "@/hooks/UseGetCallById";
import { useUser } from "@clerk/nextjs";
import { StreamCall, StreamTheme } from "@stream-io/video-react-sdk";
import { Loader2 } from "lucide-react";
import React, { useState } from "react";

type Props = {};

const Page = ({ params: { id } }: { params: { id: string } }) => {
  const { user, isLoaded } = useUser();
  const [isSetupCompleted, setIsSetupCompleted] = useState(false);
  const { call, isCallLoaded } = useGetCallById(id);

  if (!isLoaded || isCallLoaded) return <Loader2 />;

  return (
    <main className="h-screen w-full">
      <StreamCall call={call}>
        <StreamTheme>
          {!isSetupCompleted ? <MeetingSetup /> : <MeetingRoom/>}
        </StreamTheme>
      </StreamCall>
    </main>
  );
};

export default Page;
