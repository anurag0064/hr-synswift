import './App.css'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from './pages/auth/login/Login';
import Dashboard from './pages/screen/dashboard/Dashboard';
import { UserProvider } from './layouts/context/Usercontext';
import LeaveList from './pages/screen/leavelist/Leavelist';
import Applyleave from './pages/screen/applyleave/Applyleave';
import Leavecategory from './pages/screen/leavecategory/Leavecategory'
import User from './pages/screen/user/User';
import Adduser from './pages/screen/adduser/Adduser';
import Admindashboard from './pages/screen/dashboard/admindashboard/Admindashboard';
import Userdashboard from './pages/screen/dashboard/userdashboard/Userdashboard';
import Forgotpassword from './pages/auth/forgotpassword/Forgotpassword';


function App() {

  return (
    <>
      <UserProvider>
        <Router>
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/forgotpassword" element={<Forgotpassword/>}/>
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/leavelist" element={<LeaveList />} />
            <Route path="/applyleave" element={<Applyleave />} />
            <Route path="/leavecategory" element={<Leavecategory />} />
            <Route path="/user" element={<User/>}/>
            <Route path="/adduser" element={<Adduser/>}/>
            <Route path="/userdashboard" element={<Userdashboard/>}/>
            <Route path="/admindashboard" element={<Admindashboard/>}/>
          </Routes>
        </Router>
      </UserProvider>
    </>
  )
}

export default App
