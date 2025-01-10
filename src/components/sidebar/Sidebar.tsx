import "./Sidebar.scss";
import { auth } from "../../firebase";
import SidebarChannel from "./SidebarChannel";
import AddIcon from "@mui/icons-material/Add";
import MicIcon from "@mui/icons-material/Mic";
import { useAppSelector } from "../../app/hooks";
import HeadsetIcon from "@mui/icons-material/Headset";
import SettingsIcon from "@mui/icons-material/Settings";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const Sidebar = () => {
  const user = useAppSelector((state) => state.user);

  return (
    <aside className="sidebar">
      <div className="sidebar__left">
        <div className="sidebar__icon">
          <img src="./../../../public/vite.svg" alt="server icon" />
        </div>
        <div className="sidebar__icon">
          <img src="./../../../public/vite.svg" alt="server icon" />
        </div>
      </div>
      <div className="sidebar__right">
        <div className="sidebar__top">
          <h3 className="sidebar__title">Discord</h3>
          <ExpandMoreIcon />
        </div>

        <div className="sidebar-channels">
          <div className="sidebar-channels__header">
            <ExpandMoreIcon />
            <h4>プログラミングチャンネル</h4>
            <div className="sidebar-channels__content"></div>
            <AddIcon className="sidebar-channels__icon" />
          </div>

          <div className="sidebar-channels__list">
            <SidebarChannel />
            <SidebarChannel />
            <SidebarChannel />
          </div>

          <div className="sidebar-channels__footer">
            <div className="sidebar-channels__account">
              <img
                src={user?.photo}
                alt=""
                className="sidebar-channels__myIcon"
                onClick={() => auth.signOut()}
              />
              <div className="sidebar-channels__acountName">
                <h4>{user?.displayName}</h4>
                <span>#{user?.uid.substring(0, 4)}</span>
              </div>

              <div className="sidebar-channels__voice">
                <MicIcon />
                <HeadsetIcon />
                <SettingsIcon />
              </div>
            </div>
          </div>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
