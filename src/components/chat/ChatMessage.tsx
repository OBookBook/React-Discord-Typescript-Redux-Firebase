import "./ChatMessage.scss";
import FaceIcon from "@mui/icons-material/Face";

const ChatMessage = () => {
  return (
    <div className="message">
      <FaceIcon />
      <div className="message__info">
        <h4>
          naobe
          <span className="message__timestamp">2025/1/10</span>
        </h4>
        <p>content.....</p>
      </div>
    </div>
  );
};

export default ChatMessage;
