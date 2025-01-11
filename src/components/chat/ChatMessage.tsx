import "./ChatMessage.scss";
import { Avatar } from "@mui/material";
import { Timestamp } from "firebase/firestore";

interface ChatMessageProps {
  message: string;
  timestamp: Timestamp;
  user: {
    uid: string;
    photo: string;
    email: string;
    displayName: string;
  };
}

const ChatMessage = ({ message, timestamp, user }: ChatMessageProps) => {
  const formattedTimestamp = timestamp
    ? new Date(timestamp.toDate()).toLocaleString()
    : "日時不明";

  return (
    <div className="message">
      <Avatar src={user?.photo} />
      <div className="message__info">
        <h4>
          {user?.displayName}
          <span className="message__timestamp">{formattedTimestamp}</span>
        </h4>
        <p>{message}</p>
      </div>
    </div>
  );
};

export default ChatMessage;
