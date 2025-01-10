import "./Sidebar.scss";
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
      </div>
    </aside>
  );
};

export default Sidebar;
