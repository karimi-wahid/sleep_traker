"use client";

import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

// Register Chart.js components
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

interface Record {
  date: string;
  amount: number;
}

const BarChart = ({ records }: { records: Record[] }) => {
  const data = {
    labels: records.map((r) =>
      new Date(r.date).toLocaleDateString(undefined, {
        month: "short",
        day: "numeric",
      })
    ),
    datasets: [
      {
        label: "Sleep Hours",
        data: records.map((r) => r.amount),
        backgroundColor: records.map((r) =>
          r.amount < 7 ? "#FFC10799" : "#19947399"
        ),
        borderColor: records.map((r) => (r.amount < 7 ? "#FFC107" : "#199473")),
        borderWidth: 1.5,
        borderRadius: 6,
        barThickness: 28,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: { display: false },
      tooltip: {
        backgroundColor: "#fff",
        titleColor: "#199473",
        bodyColor: "#333",
        borderColor: "#199473",
        borderWidth: 1,
        padding: 8,
      },
    },
    scales: {
      x: {
        title: {
          display: true,
          text: "Date",
          color: "#199473",
          font: {
            size: 14,
            weight: "bold" as const,
          },
        },
        ticks: {
          color: "#666",
          font: {
            size: 12,
          },
        },
        grid: {
          display: false,
        },
      },
      y: {
        title: {
          display: true,
          text: "Hours Slept",
          color: "#199473",
          font: {
            size: 14,
            weight: "bold" as const,
          },
        },
        ticks: {
          color: "#444",
          font: {
            size: 12,
          },
        },
        grid: {
          color: "#eee",
        },
        suggestedMin: 4,
        suggestedMax: 10,
        beginAtZero: false,
      },
    },
  };

  return (
    <div className="bg-white rounded-xl shadow-md p-4 sm:p-6">
      <Bar data={data} options={options} />
    </div>
  );
};

export default BarChart;
