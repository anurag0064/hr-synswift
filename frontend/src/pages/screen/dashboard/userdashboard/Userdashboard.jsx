import Navbar from "../../../../layouts/components/Navbar/Navbar";
import Usersidebar from "./components/usersidebar/usersidebar";
const Userdashboard = () =>{
    return (
        <>
        <Navbar/>
        <div className="d-flex">
            <Usersidebar/>
           <h1>Welcome to User Dashboard!</h1>
           </div>

        </>
    )
}
export default Userdashboard;