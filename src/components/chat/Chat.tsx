import "./Chat.scss";
import {
  addDoc,
  Timestamp,
  collection,
  onSnapshot,
  DocumentData,
  serverTimestamp,
  CollectionReference,
} from "firebase/firestore";
import { useEffect, useState } from "react";
import { db } from "../../firebase";
import ChatHeader from "./ChatHeader";
import ChatMessage from "./ChatMessage";
import GifIcon from "@mui/icons-material/Gif";
import { InitialUserState } from "../../types";
import { useAppSelector } from "../../app/hooks";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import CardGiftcardIcon from "@mui/icons-material/CardGiftcard";
import EmojiEmotionsIcon from "@mui/icons-material/EmojiEmotions";

interface Messages {
  timestamp: Timestamp;
  message: string;
  user: InitialUserState;
}

function Chat() {
  const [inputText, setInputText] = useState<string>("");
  const [messages, setMessages] = useState<Messages[]>([]);
  const user = useAppSelector((state) => state.user.user);
  const channelId = useAppSelector((state) => state.channel.channelId);
  const channelName = useAppSelector((state) => state.channel.channelName);

  useEffect(() => {
    let colletionRef = collection(
      db,
      "channels",
      String(channelId),
      "messages"
    );

    onSnapshot(colletionRef, (snapshot) => {
      let results: Messages[] = [];
      snapshot.docs.forEach((doc) => {
        results.push({
          timestamp: doc.data().timestamp,
          message: doc.data().message,
          user: doc.data().user,
        });
      });
      setMessages(results);
      console.log(results);
    });
  }, [channelId]);

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
