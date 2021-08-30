import './App.css';
import Login from './components/login/Login';
import Topbar from './components/topbar/Topbar';

function App() {
  return (
    <div className="App">
      <Topbar/>
      {/* <Home/> */}
      {/* <Single/> */}
      {/* <WritePost/> */}
      {/* <Settings/> */}
      <Login/>
    </div>
  );
}

export default App;
