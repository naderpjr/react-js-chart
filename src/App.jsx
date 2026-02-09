import { Chart as ChartJS } from "chart.js/auto";
import { Radar, Line, Bar, Doughnut, Pie } from "react-chartjs-2";
import financeData from "./data/financeData.json";

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
      <div className='card'></div>
      <div className='card'></div>
      <div className='card'></div>
      <div className='card radarCard'></div>
    </div>
  )
}

export default App
