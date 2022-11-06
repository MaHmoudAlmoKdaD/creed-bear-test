import "./table.scss";
import { DataGrid } from "@mui/x-data-grid";
import DeleteForeverOutlinedIcon from "@mui/icons-material/DeleteForeverOutlined";
import EditOutlinedIcon from "@mui/icons-material/EditOutlined";
import { useGetUsers } from "./../../functions/GetUsers";
import { useState, useEffect, useContext } from "react";
import AddUser from "../add-user-box/AddUser";
import { Context } from "../../context/Context";
import UpdateUserBox from "../update-user-box/UpdateUserBox";
import { deleteUser } from "../../functions/DeleteUser";
import { Link } from "react-router-dom";

export default function Table() {
  const [data, setData] = useState([]);
  const [dataSendToUpdateBox, setDataSendToUpdateBox] = useState({});
  const { dispatch, openAddUserBOx, openUpdateUserBOx } = useContext(Context);
  const {initial_users} = useContext(Context)
  const [promise] = useGetUsers();
  useEffect(() => {
    promise()
      .then((res) => setData(res))
      .catch((err) => console.log(err));
  }, []);
  
  const handleDelete = (id) => {
    if (window.confirm("Do you want to delete this user?")) {
      deleteUser(id, initial_users)
        .then((res) => {
          dispatch({ type: "INITIAL_USERS", payload: res.data.users });
          setData(res.data.users);
        })
        .catch((err) => console.log(err));
    }
  };
  const handleUpdate = (dataRow) => {
    setDataSendToUpdateBox(dataRow);
  };
  const setDataFun = (dataCreated) => {
    setData(dataCreated);
  };

  const columns = [
    { field: "id", headerName: "ID", width: 70, sortable: true },
    {
      field: "view_detailed",
      headerName: "View",
      width: 65,
      renderCell: (params) => {
        return (
          <Link to={`/user/${params.row.id}`}>
            <button className="buttonView">view</button>
          </Link>
        );
      },
    },
    {
      field: "first_name",
      headerName: "First name",
      width: 130,
      sortable: false,
    },
    {
      field: "last_name",
      headerName: "Last name",
      width: 190,
      sortable: false,
    },
    {
      field: "email",
      headerName: "Email",
      width: 250,
      sortable: false,
    },
    {
      field: "avatar",
      headerName: "Avatar",
      description: "This column has a value getter and is not sortable.",
      sortable: false,
      width: 70,
      renderCell: (params) => {
        return <img src={params.row.avatar} alt="avatar" className="avatar" />;
      },
    },
    {
      field: "delete",
      headerName: "",
      sortable: false,
      width: 90,
      renderCell: (params) => {
        return (
          <div className="editDeleteIcons">
            <DeleteForeverOutlinedIcon
              className="deleteIcon"
              onClick={() => {
                handleDelete(params.row.id);
              }}
            />
            <EditOutlinedIcon
              className="editIcon"
              onClick={() => {
                dispatch({ type: "TOGGLE_OPEN_CLOSE_BOX_UPDATE" });
                handleUpdate(params.row);
              }}
            />
          </div>
        );
      },
    },
  ];

  return (
    <>
      {openAddUserBOx ? (
        <AddUser setDataFun={setDataFun} />
      ) : openUpdateUserBOx ? (
        <UpdateUserBox
          data={dataSendToUpdateBox}
          setDataFun={setDataFun}
          users={data}
        />
      ) : (
        <div style={{ height: 330, width: "80%", marginLeft: "10%" }}>
          <DataGrid
            rows={data}
            columns={columns}
            pageSize={4}
            rowsPerPageOptions={[4]}
            disableColumnMenu
            components={{
              NoRowsOverlay: () => (
                  <div className='loading'>
                      <h3>loading...</h3>
                  </div>
              )
          }}
          />
        </div>
      )}
    </>
  );
}
