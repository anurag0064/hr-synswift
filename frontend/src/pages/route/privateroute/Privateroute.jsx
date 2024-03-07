import { Navigate } from "react-router-dom";

export const MainRoute = ({ children}) => {
    const Token = localStorage.getItem('token');
        
    if (Token) {
      return children
    }
      
    return <Navigate to="/Login"/>
  }