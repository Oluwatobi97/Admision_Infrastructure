import React from "react";
import StatCard from "@/components/dashboard/StatCard";
import Chart from "@/components/dashboard/Chart";
import Sidebar from "@/components/layout/Sidebar";

export const metadata = {
  title: "Admin Dashboard",
  description: "School admission admin dashboard",
};

export default function DashboardPage() {
  const totalStudents = 120;
  const passed = 85;
  const failed = 35;

  const chartData = [
    { name: "Passed", value: passed, color: "#22c55e" },
    { name: "Failed", value: failed, color: "#ef4444" },
  ];

  return (
    <div className="flex">
      <Sidebar />

      <div className="flex-1 p-6 bg-gray-100 min-h-screen">
        <h1 className="text-2xl text-gray-950 font-bold mb-6">
          Admission Dashboard
        </h1>

        <div className="grid grid-cols-3 gap-6">
          <StatCard
            title="Total Students"
            value={totalStudents}
            color="text-blue-600"
          />
          <StatCard title="Passed" value={passed} color="text-green-600" />
          <StatCard title="Failed" value={failed} color="text-red-600" />
        </div>

        <section className="mt-8">
          <h2 className="text-xl  text-gray-900  font-semibold mb-4">
            Pass vs Fail
          </h2>
          <div className="rounded-2xl bg-white p-6 shadow">
            <Chart data={chartData} />
          </div>
        </section>
      </div>
    </div>
  );
}
