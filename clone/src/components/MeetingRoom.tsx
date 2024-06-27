import {
  CallControls,
  CallParticipantsList,
  PaginatedGridLayout,
  SpeakerLayout,
} from "@stream-io/video-react-sdk";
import { useState } from "react";

type Props = {};
type CallLayout = "grid" | "speaker-left" | "speaker-right";
const MeetingRoom = (props: Props) => {
  const [layout, setLayout] = useState<CallLayout>("speaker-left");
  const [showParticipants, setShowParticipants] = useState(false);
  const CallLayout = () => {
    if (layout === "grid") return <PaginatedGridLayout />;
    if (layout === "speaker-left")
      return <SpeakerLayout participantsBarPosition={"right"} />;
    if (layout === "speaker-right")
      return <SpeakerLayout participantsBarPosition={"left"} />;
  };
  return (
    <section className="relative h-screen w-full overflow-hidden pt-4 text-theme-textActive">
      <div className="relative flex size-full items-center justify-center">
        <div className="flex size-full max-w-[1000px] items-center">
          <CallLayout />
        </div>

        <div className="h-[100vh-86px] hidden ml-2">
          <CallParticipantsList onClose={() => setShowParticipants(false)} />
        </div>
      </div>
      <div className="fixed bottom-0 flex w-full items-center justify-center gap-5">
        {" "}
        <CallControls />
      </div>
    </section>
  );
};

export default MeetingRoom;
