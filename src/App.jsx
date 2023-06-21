import Navbar from './components/Navbar';
import Header from './components/Header';
import { Outlet } from 'react-router-dom';

function App() {
    return (
        <>
            <Navbar />
            <Header />
            <Outlet />
        </>
    );
}

export default App;

