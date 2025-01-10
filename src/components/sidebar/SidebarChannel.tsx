import "./SidebarChannel.scss";
import { DocumentData } from "firebase/firestore";

interface SidebarChannelProps {
  id: string;
  channel: DocumentData;
}

function SidebarChannel({ id, channel }: SidebarChannelProps) {
  return (
    <div className="sidebar-channel">
      <h4>
        <span className="sidebar-channel__hash">#</span>
        {channel.channel.channelName}
      </h4>
    </div>
  );
}

export default SidebarChannel;
