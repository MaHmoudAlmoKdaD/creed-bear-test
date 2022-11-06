import "./header.scss";
import CloudUploadOutlinedIcon from "@mui/icons-material/CloudUploadOutlined";
import AddIcon from "@mui/icons-material/Add";
import TopBar from "../topbar/TopBar";
import { useContext } from "react";
import { Context } from "../../context/Context";
const Header = () => {
  const { dispatch } = useContext(Context);
  const handleOpenAddUserBox = () => {
    dispatch({ type: "TOGGLE_OPEN_CLOSE_BOX_ADD"});
  };
  return (
    <div className="header">
      <div className="top">
        <h1>Users</h1>
        <div className="buttons">
          <button>
            <CloudUploadOutlinedIcon className="icon" />
            Import
          </button>
          <button onClick={handleOpenAddUserBox}>
            <AddIcon className="icon" />
            Add User
          </button>
        </div>
      </div>
      <TopBar />
    </div>
  );
};

export default Header;
