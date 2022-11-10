import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getData } from "../Redux/DataReducer/action";
import BarChart from "react-bar-chart";
import { useState } from "react";

const Dashboard = () => {
  const dispatch = useDispatch();
  const [bardata, setBardata] = useState([
    { text: "samsung", value: 500 },
    { text: "xiaomi", value: 400 },
    { text: "Realme", value: 450 },
    { text: "Iphone", value: 1000 },
    { text: "Redmi", value: 400 },
  ]);
  let { data } = useSelector((state) => state.data);

  useEffect(() => {
    dispatch(getData());
    console.log(data);
    // setBardata([{ text: data[0]?.text, value: data[0]?.value }]);
  }, []);

  console.log(bardata);
  return (
    <div>
      <BarChart data={bardata} width={500} height={500}></BarChart>
    </div>
  );
};

export default Dashboard;
