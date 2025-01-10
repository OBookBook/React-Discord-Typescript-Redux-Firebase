import "./Chat.scss";
import ChatHeader from "./ChatHeader";
import ChatMessage from "./ChatMessage";
import GifIcon from "@mui/icons-material/Gif";
import { useAppSelector } from "../../app/hooks";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import CardGiftcardIcon from "@mui/icons-material/CardGiftcard";
import EmojiEmotionsIcon from "@mui/icons-material/EmojiEmotions";

function Chat() {
  const channelName = useAppSelector((state) => state.channel.channelName);

  return (
    <div className="chat">
      <ChatHeader channelName={channelName} />
      <div className="chat__message">
        <ChatMessage />
        <ChatMessage />
        <ChatMessage />
        <ChatMessage />
      </div>
      <div className="chat__input">
        <AddCircleIcon />
        <form>
          <input type="text" placeholder="add message" />
          <button type="submit">Send</button>
        </form>

        <div className="chat_icons">
          <CardGiftcardIcon />
          <GifIcon />
          <EmojiEmotionsIcon />
        </div>
      </div>
    </div>
  );
}

export default Chat;
