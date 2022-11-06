import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Sidebar from "../../components/sidebar/Sidebar";
import { Context } from "../../context/Context";
import "./singleUser.scss";

const Single = () => {
  
  const { initial_users } = useContext(Context);
  const [user, setUser] = useState([]);
  const { id } = useParams();
  useEffect(() => {
    const getUser = () => {
      if (initial_users) {
        const user = initial_users?.filter((user) => {
          return user.id == id;
        });
        return user[0] || null;
      }
    };
    setUser(getUser());
  }, []);

  return (
    <div className="single">
      <Sidebar />
      <div className="singleContainer">
        <div className="top">
          <div className="left">
            <h1 className="title">Information</h1>
            <div className="item">
              <img
                src="https://tse3.mm.bing.net/th?id=OIP.7VThHu2VS76jFvN5_5gnlgHaEW&pid=Api&P=0"
                alt=""
                className="itemImg"
              />
              <div className="details">
                <div className="itemTitle">
                  {user?.first_name} {user?.last_name}
                </div>
                <div className="detailItem">
                  <span className="itemKey">Email:</span>
                  <span className="itemValue">{user?.email}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Single;
