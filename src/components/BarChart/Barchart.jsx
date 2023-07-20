import Chart from "chart.js/auto";
import { CategoryScale } from "chart.js";
import { useEffect, useState } from "react";
import { Data } from "../../utils/chartDatas.js";
import { Bar } from "react-chartjs-2";

const BarComponent = ({ chartData, imgLogos }) => {
  return (
    <div className="relative w-[100%]  h-[90%] flex items-center flex-col m-0 p-0">
      <h2 className="text-center ">Team goals</h2>
      <Bar
        data={chartData}
        options={{
          scales: {
            x: {
              grid: {
                display: false,
              },
            },
            y: {
              grid: {
                display: true,
              },
            },
          },
          responsive: true,
          maintainAspectRatio: false,

          plugins: {
            title: {
              display: false,
              text: "All goals",
            },
            legend: {
              display: false,
            },
            labels: {
              render: "image",
              images: imgLogos,
            },
          },
        }}
      />
    </div>
  );
};

Chart.register(CategoryScale);

const formatChartData = (datas) => {
  return {
    labels: datas.map((data) => data.name),
    datasets: [
      {
        label: "Goals",
        data: datas.map((data) => data.goals),
        backgroundColor: ["#373940"],
      },
    ],
  };
};

export default function BarChart({ datas }) {
  const formattedImage = () => {
    const images = datas.map((d) => {
      return { width: 20, height: 20, src: d.logo };
    });

    return images;
  };
  const [chartData, setChartData] = useState(formatChartData(datas));

  useEffect(() => {
    setChartData(formatChartData(datas));
  }, [datas]);
  return (
    <div className="relative w-[100%]  h-[100%] m-0 p-0">
      <BarComponent chartData={chartData} imgLogos={formattedImage(datas)} />
    </div>
  );
}
