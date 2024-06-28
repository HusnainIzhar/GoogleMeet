import {
  CallControls,
  CallParticipantsList,
  CallingState,
  PaginatedGridLayout,
  SpeakerLayout,
  useCallStateHooks,
} from "@stream-io/video-react-sdk";
import {
  BetweenHorizontalEnd,
  BetweenHorizontalStart,
  LayoutGrid,
  LayoutPanelLeft,
  Users,
} from "lucide-react";
import { useSearchParams } from "next/navigation";
import { useState } from "react";
import EndMeeting from "./EndMeeting";

type Props = {};
type TCallLayout = "grid" | "speaker-left" | "speaker-right";

const MeetingRoom = (props: Props) => {
  const [layout, setLayout] = useState<TCallLayout>("speaker-left");
  const [showParticipants, setShowParticipants] = useState(false);
  const [showDropDown, setShowDropDown] = useState(false);
  const searchParams = useSearchParams();
  const { useCallCallingState } = useCallStateHooks();
  const callingState = useCallCallingState();
  const isPersonalRoom = !!searchParams.get("personal");

  if (callingState !== CallingState.JOINED) return <div>...loading</div>;
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

        {showParticipants && (
          <div className="h-[100vh-86px] ml-2">
            <CallParticipantsList onClose={() => setShowParticipants(false)} />
          </div>
        )}
      </div>
      <div className="fixed bottom-0 flex w-full items-center justify-center gap-5 flex-wrap">
        {" "}
        <CallControls />
        <div
          onClick={() => setShowDropDown(!showDropDown)}
          className="relative bg-theme-2 hover:cursor-pointer text-theme-textInactive p-2 rounded-full"
        >
          {" "}
          <LayoutPanelLeft className="hover:text-theme-textActive" />
          {showDropDown && (
            <div className="absolute bottom-12 right-0 p-2 rounded-full bg-theme-2 flex gap-5 ">
              <BetweenHorizontalStart
                onClick={() => setLayout("speaker-left")}
                className="hover:text-theme-textActive"
              />
              <LayoutGrid
                onClick={() => setLayout("grid")}
                className="hover:text-theme-textActive"
              />
              <BetweenHorizontalEnd
                onClick={() => setLayout("speaker-right")}
                className="hover:text-theme-textActive"
              />
            </div>
          )}
        </div>
        <div
          onClick={() => setShowParticipants(!showParticipants)}
          className="relative bg-theme-2 hover:cursor-pointer text-theme-textInactive p-2 rounded-full"
        >
          {" "}
          <Users className="hover:text-theme-textActive" />
        </div>
        {!isPersonalRoom && <EndMeeting />}
      </div>
    </section>
  );
};

export default MeetingRoom;
