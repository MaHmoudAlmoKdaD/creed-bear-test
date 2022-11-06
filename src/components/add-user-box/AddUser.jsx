import "./addUser.scss";
import { useContext, useRef } from "react";
import { Context } from "../../context/Context";
import { useCreateUser } from "./../../functions/CreateUser";

const AddUser = ({ setDataFun }) => {
  const { dispatch } = useContext(Context);
  const [promise] = useCreateUser();
  const first_name = useRef("");
  const last_name = useRef("");
  const email = useRef("");
  const handleCloseAddUserBox = () => {
    dispatch({ type: "TOGGLE_OPEN_CLOSE_BOX_ADD" });
  };
  const handleAddUser = (e) => {
    e.preventDefault();
    promise({
      first_name: first_name.current.value,
      last_name: last_name.current.value,
      email: email.current.value,
    })
      .then((res) => {
        dispatch({ type: "INITIAL_USERS", payload: res.data.users });
        setDataFun(res.data.users);
        alert("user added successfully..👍");
      })
      .catch((err) => {
        alert("email exist, choose another one");
      });
  };
  return (
    <form id="addNoteModal" className="modal" onSubmit={handleAddUser}>
      <div className="modal-content">
        <div className="modal-header">
          <h2>New User</h2>
          <p className="error">
            HINT: the avatar and Id will create automatically
          </p>
        </div>
        <div className="modal-body">
          <div className="row">
            <div className="left">
              <p>First Name:</p>
            </div>
            <div className="right">
              <input
                id="addTitle"
                type="text"
                className="modal-input"
                ref={first_name}
                required
              />
            </div>
          </div>
          <div className="row">
            <div className="left">
              <p>Last Name</p>
            </div>
            <div className="right">
              <input
                id="addTitle"
                type="text"
                className="modal-input"
                ref={last_name}
                required
              />
            </div>
          </div>
          <div className="row">
            <div className="left">
              <p>Email</p>
            </div>
            <div className="right">
              <input
                id="addTitle"
                type="email"
                className="modal-input"
                ref={email}
                required
              />
            </div>
          </div>
        </div>
        <div className="modal-footer">
          <button id="saveAddNoteBtn" type="submit" className="action-button">
            Save
          </button>
          <button
            id="cancelAddNoteBtn"
            type="button"
            className="action-button"
            onClick={handleCloseAddUserBox}
          >
            Cancel
          </button>
        </div>
      </div>
    </form>
  );
};

export default AddUser;
