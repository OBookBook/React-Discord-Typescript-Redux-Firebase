import "./SidebarChannel.scss";
import { useAppDispatch } from "../../app/hooks";
import { DocumentData } from "firebase/firestore";
import { setChannelInfo } from "../../features/channelSlice";

interface SidebarChannelProps {
  id: string;
  channel: DocumentData;
}

function SidebarChannel({ id, channel }: SidebarChannelProps) {
  const dispatch = useAppDispatch();

  return (
    <div
      className="sidebar-channel"
      onClick={() =>
        dispatch(
          setChannelInfo({
            channelId: id,
            channelName: channel.channel.channelName,
          })
        )
      }
    >
      <h4>
        <span className="sidebar-channel__hash">#</span>
        {channel.channel.channelName}
      </h4>
    </div>
  );
}

export default SidebarChannel;
