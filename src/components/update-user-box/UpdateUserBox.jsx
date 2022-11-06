import { Context } from "../../context/Context";
import { useContext, useRef } from "react";
import { updateUser } from "../../functions/UpdateUser";

const UpdateUserBox = ({ data, setDataFun, users }) => {
  const { dispatch } = useContext(Context);
  const first_nameRef = useRef("");
  const last_nameRef = useRef("");
  const emailRef = useRef("");
  const handleCloseUpdateUserBox = () => {
    dispatch({ type: "TOGGLE_OPEN_CLOSE_BOX_UPDATE" });
  };
  const handleAddUser = (e) => {
    e.preventDefault();
    updateUser(users, data.id, {
      first_name: first_nameRef.current.value,
      last_name: last_nameRef.current.value,
      email: emailRef.current.value,
    })
      .then((res) => {
        setDataFun(res.data.users);
        dispatch({ type: "INITIAL_USERS", payload: res.data.users });
        alert("user Updated successfully..👍");
      })
      .catch((err) => {
        alert("something went wrong, try again...");
      });
  };
  return (
    <form id="addNoteModal" className="modal" onSubmit={handleAddUser}>
      <div className="modal-content">
        <div className="modal-header">
          <h2>Update User</h2>
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
                ref={first_nameRef}
                defaultValue={data.first_name}
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
                ref={last_nameRef}
                defaultValue={data.last_name}
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
                ref={emailRef}
                defaultValue={data.email}
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
            onClick={handleCloseUpdateUserBox}
          >
            Cancel
          </button>
        </div>
      </div>
    </form>
  );
};

export default UpdateUserBox;
