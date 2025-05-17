import React from "react";
import { LineChart } from "recharts";

const data = [
  { month: "Jan", cognitive: 4, motor: 6, social: 5 },
  { month: "Feb", cognitive: 6, motor: 7, social: 6 },
  { month: "Mar", cognitive: 8, motor: 9, social: 7 },
];

const ProgressGraph = () => {
  return (
    <LineChart width={400} height={300} data={data}>
      <Line type="monotone" dataKey="cognitive" stroke="#82ca9d" />
      <Line type="monotone" dataKey="motor" stroke="#8884d8" />
      <Line type="monotone" dataKey="social" stroke="#ff7300" />
    </LineChart>
  );
};

export default ProgressGraph;
