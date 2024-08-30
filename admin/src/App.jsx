
import { BrowserRouter, Route, Routes } from "react-router-dom";
import LBar from "./components/custom/SideNav/SideNav";
import Supervisors from "./pages/Supervisors/Supervisors";
import Operators from "./pages/Operators/Operators";
import Payroll from "./pages/Payroll/Payroll";

const App = () => {
  return (
    <BrowserRouter>
      <div>
        <LBar />
        <Routes>
          <Route path="/supervisors" element={<Supervisors />}/>
          <Route path="/operators" element={<Operators />}/>
          <Route path="/payroll" element={<Payroll /> }/>
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;
