
import LoginPage from "pages/LoginPage";
import RegisterPage from "pages/RegisterPage";
import { Route, Routes, NavLink} from "react-router-dom";



export const App = () => {
  return (
    <div>
      <div style={{display:"grid"}}>
    
        <NavLink to="/register">Register</NavLink>
        <NavLink to="/login">Login</NavLink>
      </div>

      <Routes>
    
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/login" element={<LoginPage />} />
      </Routes>
    </div>
  );
};
