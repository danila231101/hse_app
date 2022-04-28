import { BrowserRouter as Router } from 'react-router-dom';
import AppRouter from './components/AppRouter';
import { useState } from 'react/cjs/react.production.min';
import Sidebar from './components/UI/sideMenu/Sidebar';
import './styles/App.css';

function App() {
    const flag = true;
    const routes = AppRouter(flag);

    if (flag) {
        return (
        <Router>
            <div className='page'>
                <Sidebar/>
                {routes}
            </div>
        </Router>
        );
    }
    return (
        <Router>
            <div className='page'>
                {routes}
            </div>
        </Router>
    );
}

export default App;
