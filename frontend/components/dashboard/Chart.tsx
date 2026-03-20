"use client";

import React from "react";
import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  ResponsiveContainer,
  Legend,
} from "recharts";

type ChartData = {
  name: string;
  value: number;
  color: string;
};

type ChartProps = {
  data: ChartData[];
};

export default function Chart({ data }: ChartProps) {
  return (
    <div className="h-80 w-full rounded-xl border border-slate-200 bg-white">
      <ResponsiveContainer width="100%" height={250}>
        <PieChart>
          <Pie
            data={data}
            dataKey="value"
            nameKey="name"
            innerRadius={60}
            outerRadius={90}
            paddingAngle={4}
            labelLine={false}
            label={({ name, percent }) => {
              const p = percent ?? 0;
              return `${name}: ${(p * 100).toFixed(0)}%`;
            }}
          >
            {data.map((entry) => (
              <Cell key={entry.name} fill={entry.color} />
            ))}
          </Pie>
          <Tooltip formatter={(value) => `${value ?? ""}`} />
          <Legend verticalAlign="bottom" height={36} />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
}
