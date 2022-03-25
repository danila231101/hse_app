import { BrowserRouter as Router } from 'react-router-dom';
import AppRouter from './components/AppRouter';
import Sidebar from './components/UI/sideMenu/Sidebar';
import './styles/App.css';

// const ScheduleHeader = () => {
//     return <h1> Schedule </h1>
// }

// const CoursesHeader = () => {
//     return <h1> Courses </h1>
// }

// const GradesHeader = () => {
//     return <h1> Courses </h1>
// }

function App() {
  return (
    <Router>
        <Sidebar/>
        <AppRouter/>
    </Router>
  );
}

export default App;
