import Chart from "../../components/chart/Chart";
import FeaturedInfo from "../../components/featuredInfo/FeaturedInfo";
import "./home.css";
import WidgetSm from "../../components/widgetSm/WidgetSm";
import WidgetLg from "../../components/widgetLg/WidgetLg";
import React, { useState, useEffect, useMemo } from "react";
import axios from "axios";
export default function Home() {
  const [userStats, setUserStats] = useState([]);
  const MONTHS = useMemo(() => ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Agu", "Sep", "Oct", "Nov", "Dec"], []);
  useEffect(() => {
    const getStats = async () => {
      try {
        const res = await axios.get("users/stats", {
          headers: {
            token:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzNzc4MjM5ZTIyNGYzZWUxMjM2MGQxYSIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY2ODc5MjU0MCwiZXhwIjoxNjY5MjI0NTQwfQ.JPVi9owJfK4Km7JUy_2N93Oen9zFQk0KA_eVEpDorog",
          },
        });
        const statsList = res.data.sort((a, b) => {
          return a._id - b._id;
        });
        statsList.map((item) => setUserStats((prev) => [...prev, { name: MONTHS[item._id - 1], "New User": item.total }]));
      } catch (error) {
        console.log(error);
      }
    };
    getStats();
    // console.log("rendering home page")
  }, [MONTHS]);
  // console.log(userStats);
  return (
    <div className="home">
      <FeaturedInfo />
      <Chart data={userStats} title="User Analytics" grid dataKey="New User" />
      <div className="homeWidgets">
        <WidgetSm />
        <WidgetLg />
      </div>
    </div>
  );
}
