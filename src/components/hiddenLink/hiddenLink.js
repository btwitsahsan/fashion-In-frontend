import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";
import Loader, { Spinner } from "../loader/Loader";

const ShowOnLogin = ({children}) => {
    const {isLoggedIn } = useSelector(
        (state) => state.auth
      );
      if(isLoggedIn){
        return children
      }else{
        return null
      }
}
export const ShowOnAdmin = ({children}) => {
    const {user} = useSelector(
        (state) => state.auth
      );
      if(user && user.role === "admin"){
        return children
      }else{
        return null
      }
}
export const ShowOnLogout = ({children}) => {
    const {isLoggedIn } = useSelector(
        (state) => state.auth
      );
      if(!isLoggedIn){
        return children
      }else{
        return null
      }
}

export const AdminRoute = () => {
  const { user, isLoggedIn } = useSelector((state) => state.auth);
  

  if (!isLoggedIn) {
    return <Spinner/>; // Prevent redirection until auth check completes
  }

  return user && user.role === "admin" ? <Outlet /> : <Navigate to="/" />;
};



export const MainRoute = () => {
return (
  <>
  <div style={{minHeight: '100vh'}}>
    <Outlet/>
  </div>
  </>
)
};



export default ShowOnLogin;