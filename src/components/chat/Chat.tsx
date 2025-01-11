import "./Chat.scss";
import {
  addDoc,
  collection,
  DocumentData,
  CollectionReference,
  serverTimestamp,
} from "firebase/firestore";
import { useState } from "react";
import { db } from "../../firebase";
import ChatHeader from "./ChatHeader";
import ChatMessage from "./ChatMessage";
import GifIcon from "@mui/icons-material/Gif";
import { useAppSelector } from "../../app/hooks";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import CardGiftcardIcon from "@mui/icons-material/CardGiftcard";
import EmojiEmotionsIcon from "@mui/icons-material/EmojiEmotions";

function Chat() {
  const [inputText, setInputText] = useState<string>("");
  const user = useAppSelector((state) => state.user.user);
  const channelId = useAppSelector((state) => state.channel.channelId);
  const channelName = useAppSelector((state) => state.channel.channelName);

  const sendMessage = async (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    e.preventDefault();
    const collectionRef: CollectionReference<DocumentData> = collection(
      db,
      "channels",
      String(channelId),
      "messages"
    );

    await addDoc(collectionRef, {
      message: inputText,
      timestamp: serverTimestamp(),
      user: user,
    });
  };

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
          <input
            type="text"
            placeholder="add message"
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setInputText(e.target.value)
            }
          />
          <button
            type="submit"
            onClick={(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
              sendMessage(e);
            }}
          >
            Send
          </button>
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
