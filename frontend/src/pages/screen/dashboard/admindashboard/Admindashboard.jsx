import Navbar from "../../../../layouts/components/Navbar/Navbar";
import Sidebar2 from "./components/sidebar/Sidebar";
const Admindashboard =() =>{
    return (
        <>
 <Navbar/>
 <div className="d-flex">
 <Sidebar2/>
 <h1>Welcome to Admin Dashboard!</h1>
 </div>

        </>
    )
}
export default Admindashboard;