import "./widgetSm.css";
import { Visibility } from "@material-ui/icons";
import { useEffect, useState } from "react";
import axios from "axios";
export default function WidgetSm() {
  const [newUsers, setNewUsers] = useState([]);
  useEffect(() => {
    const getNewUsers = async () => {
      const res =await axios.get("/users?new=true", {
        headers: {
          token:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzNzc4MjM5ZTIyNGYzZWUxMjM2MGQxYSIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY2OTMyNjEyMywiZXhwIjoxNjY5NzU4MTIzfQ.QfCbSrfzwk31C_jy1vdTUvANS1quJmZ6SeTE34YkpX8",
        },
      });
      try {
        setNewUsers(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    // console.log("rendering widget sm page")

    getNewUsers();
  }, []);
  return (
    <div className="widgetSm">
      <span className="widgetSmTitle">New Join Members</span>
      <ul className="widgetSmList">
        {newUsers &&newUsers.map((user,index) => (
          <li className="widgetSmListItem" key={index}>
            <img
              src={user.profilePic || "https://storage.planner5d.com/ud/e997a22aff5980f534db552d310776ee.jpg?v=1620787001" }
              alt={user.username}
              className="widgetSmImg"
            />
            <div className="widgetSmUser">
              <span className="widgetSmUsername">{user.username}</span>
            </div>
            <button className="widgetSmButton">
              <Visibility className="widgetSmIcon" />
              Display
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
