
import {Routes,Route} from "react-router-dom" 
import LORpage from "./pages/LORpage";
import MainPage from "./pages/MainPage";
import Terapevt from "./pages/Terapevt";
import Oculist from "./pages/Oculist";
import Neuropotolog from "./pages/Neuropotolog";
import Cardiolog from "./pages/Cardiolog";
import Revmotolog from "./pages/Revmotolog";
import Endocrinolog from "./pages/Endocrinolog";
import Stomotolog from "./pages/Stomotolog";
import RegisterPage from "./pages/RegisterPage";
import LoginPage from "./pages/LoginPage";
import Appointment from "./pages/Appointment";
function App() {
  return (
    <div>
    <Routes>
      <Route path='/' element={<MainPage/>} />
      <Route path='/register/' element={<RegisterPage/>} />
      <Route path='/appointment/' element={<Appointment/>} />
      <Route path='/login/' element={<LoginPage/>} />
      <Route path='/LOR/' element={<LORpage/>} />
      <Route path='/Terapevt/' element={<Terapevt/>} />
      <Route path='/Oculist/' element={<Oculist/>} />
      <Route path='/Neuropotolog/' element={<Neuropotolog/>} />
      <Route path='/Cardiolog/' element={<Cardiolog/>} />
      <Route path='/Revmotolog/' element={<Revmotolog/>} />
      <Route path='/Endocrinolog/' element={<Endocrinolog/>} />
      <Route path='/Stomotolog/' element={<Stomotolog/>} />
    </Routes>
  </div>
  );
}

export default App;
