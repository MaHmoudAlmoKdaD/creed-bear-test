import "./sidebar.scss";
import CottageOutlinedIcon from "@mui/icons-material/CottageOutlined";
import DashboardOutlinedIcon from "@mui/icons-material/DashboardOutlined";
import ViewInArIcon from "@mui/icons-material/ViewInAr";
import TableRowsOutlinedIcon from "@mui/icons-material/TableRowsOutlined";
import PeopleOutlineIcon from "@mui/icons-material/PeopleOutline";
import PieChartOutlineIcon from "@mui/icons-material/PieChartOutline";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
import SettingsSuggestOutlinedIcon from "@mui/icons-material/SettingsSuggestOutlined";
import UnfoldMoreIcon from "@mui/icons-material/UnfoldMore";
import TaskOutlinedIcon from "@mui/icons-material/TaskOutlined";
const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="logo itemList">
        <ViewInArIcon />
        <p>Untitled UI</p>
      </div>
      <div className="listContainer">
        <ul className="list">
          <li className="itemList">
            <CottageOutlinedIcon className="icon" />
            <p>Home</p>
          </li>
          <li className="itemList">
            <DashboardOutlinedIcon className="icon" />
            <p>Dashboard</p>
          </li>
          <li className="itemList">
            <TableRowsOutlinedIcon className="icon" />
            <p>Projects</p>
          </li>
          <li className="itemList">
            <TaskOutlinedIcon className="icon" />
            <p>Tasks</p>
          </li>
          <li className="itemList">
            <PieChartOutlineIcon className="icon" />
            <p>Reporting</p>
          </li>
          <li className="itemList">
            <PeopleOutlineIcon className="icon" />
            <p>Users</p>
          </li>
        </ul>
        <ul className="list">
          <li className="itemList">
            <NotificationsNoneIcon className="icon" />
            <p>Notification</p>
          </li>
          <li className="itemList">
            <ChatBubbleOutlineIcon className="icon" />
            <p>Support</p>
          </li>
          <li className="itemList">
            <SettingsSuggestOutlinedIcon className="icon" />
            <p>Setting</p>
          </li>
          <div className="card">
            <img
              src="data:image/jpeg;base64,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"
              alt="avatar"
            />
            <div className="name">
              <p className="fullName">Frankie Sullivan</p>
              <span className="username">@Frankie</span>
            </div>
            <div className="arrows">
              <UnfoldMoreIcon className="icon" />
            </div>
          </div>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
