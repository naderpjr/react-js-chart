import { Chart as ChartJS } from "chart.js/auto";
import { Radar, Line, Bar, Doughnut, Pie } from "react-chartjs-2";
import financeData from "./data/financeData.json";
import businessStreams from "./data/businessStreams.json";

function App() {
  return (
    <div className='App'>
      <div className='card'>
        <Line
          data={{
            labels: financeData.map((item) => item.label),
            datasets: [
              {
                label: "Earnings",
                data: financeData.map((item) => item.income),
                backgroundColor: "#6a5acd",
                borderColor: "#6a5acd",
              },
              {
                label: "Expenses",
                data: financeData.map((item) => item.outflow),
                backgroundColor: "#20b2aa",
                borderColor: "#20b2aa",
              }

            ]
          }}
        />
      </div>
      <div className='card'>
        <Bar
          data={{
            labels: businessStreams.map((item) => item.label),
            datasets: [
              {
                label: "Share of Income",
                data: businessStreams.map((item) => item.value),
                backgroundColor: "#6a5acd",
                borderColor: "#6a5acd",
              }

            ]
          }}
        />
      </div>
      <div className='card'>
        <Doughnut
          data={{
            labels: businessStreams.map((item) => item.label),
            datasets: [
              {
                label: "Share of Income",
                data: businessStreams.map((item) => item.value),
                backgroundColor: [
                  "#5ecd5aff",
                  "#6d9bffff",
                  "#ff7779ff"
                ],
                borderColor: [
                  "#5ecd5aff",
                  "#6d9bffff",
                  "#ff7779ff"
                ],
              }

            ]
          }}
        />
      </div>
      <div className='card'>
        <Pie
          data={{
            labels: businessStreams.map((item) => item.label),
            datasets: [
              {
                label: "Share of Income",
                data: businessStreams.map((item) => item.value),
                backgroundColor: [
                  "#5ecd5aff",
                  "#6d9bffff",
                  "#ff7779ff"
                ],
                borderColor: [
                  "#5ecd5aff",
                  "#6d9bffff",
                  "#ff7779ff"
                ],
              }

            ]
          }}
        />
      </div>
    </div>
  )
}

export default App
