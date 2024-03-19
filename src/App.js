import './App.css';
import BarChart from './components/Charts/BarChart';
import Navbar from './components/Navbar/Navbar';
import DoughnutChart from './components/Charts/DoughnutChart';
import WeeklyLineChart from './components/Charts/WeeklyLineChart';
import DailyLineChart from './components/Charts/DailyLineChart';
import PieChart from './components/Charts/PieChart';

function App() {
  return (
    <div className="App">
    <Navbar />
    <BarChart />
    <DoughnutChart />
    <DailyLineChart />
    <WeeklyLineChart />
    <PieChart />
    </div>
  );
}

export default App;
