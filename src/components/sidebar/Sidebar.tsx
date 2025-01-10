import "./Sidebar.scss";
import AddIcon from "@mui/icons-material/Add";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const Sidebar = () => {
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
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
