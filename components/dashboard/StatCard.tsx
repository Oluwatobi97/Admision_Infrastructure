import React from "react";

type Props = {
  title: string;
  value: number;
  color: string;
};

const StatCard = ({ title, value, color }: Props) => {
  return (
    <div className="bg-white rounded-2xl shadow p-5 flex flex-col gap-2">
      <p className="text-gray-500 text-sm">{title}</p>
      <h2 className={`text-2xl font-bold ${color}`}>{value}</h2>
    </div>
  );
};

export default StatCard;
