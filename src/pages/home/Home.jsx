import axios from "axios";
import React, { useState, useEffect } from "react";
import Featured from "../../components/featured/Featured";
import List from "../../components/list/List";
import Navbar from "../../components/navbar/Navbar";
import "./Home.scss";
const Home = ({ type }) => {
  const [lists, setLists] = useState([]);
  const [genre, setGenre] = useState(null);
  useEffect(() => {
    const getRandomLists = async () => {
      try {
        const res = await axios.get(
          `lists${type ? "?type=" + type : ""}${genre ? "&genre=" + genre : ""}`,
          {
            headers: {
              token:
                "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzNzc4MjM5ZTIyNGYzZWUxMjM2MGQxYSIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY2ODc5MjU0MCwiZXhwIjoxNjY5MjI0NTQwfQ.JPVi9owJfK4Km7JUy_2N93Oen9zFQk0KA_eVEpDorog",
            },
          }
        );
        // console.log("res.data :",res);
        setLists(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    getRandomLists();
  }, [genre, type]);

  return (
    <div className="home">
      <Navbar />
      <Featured type={type} />
      {lists.map((list,index) => (
        <List list={list} key={index}/>
      ))}
    </div>
  );
};

export default Home;
