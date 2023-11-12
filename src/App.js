import './App.css';
import {Header} from "./components/Header/Header";
import {AppRoutes} from './components/Router/AppRoutes'

function App() {
    return (
        <div className="App">
            <Header/>
            <AppRoutes/>
        </div>
    );
}

export default App;
