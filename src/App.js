import './App.css';
import {Routes,Route,Navigate} from "react-router-dom";
import {Home,Login} from "./Pages/index"
import { useAuth } from './Context/AuthContext';

function App() {

  const {isLoggedIn} = useAuth()

  function PrivateRoute({path,login,element}){
    return login?<Route path={path} element={element}/>:<Navigate state={{from:path}} replace to="/login"/>
  }

  return (
    <div className="App">
      <Routes>
        <PrivateRoute login={isLoggedIn} path="/" element={<Home/>}/>
        <Route path="/login" element={<Login/>}/>
      </Routes>
    </div>
  );
}

export default App;
