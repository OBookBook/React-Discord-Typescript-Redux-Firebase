import "./ChatHeader.scss";
import HelpIcon from "@mui/icons-material/Help";
import SendIcon from "@mui/icons-material/Send";
import SearchIcon from "@mui/icons-material/Search";
import PeopleIcon from "@mui/icons-material/People";
import PushPinIcon from "@mui/icons-material/PushPin";
import NotificationsActiveIcon from "@mui/icons-material/NotificationsActive";

const ChatHeader = () => {
  return (
    <div className="chat-header">
      <div className="chat-header__left">
        <h3>
          <span className="chat-header__hash">#</span>
          Next.js
        </h3>
      </div>
      <div className="chat-header__right">
        <NotificationsActiveIcon />
        <PushPinIcon />
        <PeopleIcon />
        <div className="chat-header__search">
          <input type="text" placeholder="search" />
          <SearchIcon />
        </div>
        <SendIcon />
        <HelpIcon />
      </div>
    </div>
  );
};

export default ChatHeader;
