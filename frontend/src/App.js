import './App.css';
import Register from './components/register/Register';
import Topbar from './components/topbar/Topbar';

function App() {
  return (
    <div className="App">
      <Topbar/>
      {/* <Home/> */}
      {/* <Single/> */}
      {/* <WritePost/> */}
      {/* <Settings/> */}
      {/* <Login/> */}
      <Register/>
    </div>
  );
}

export default App;
