import { ReactNode, useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from './AuthContext';



interface PrivateRouteProps {
    children: ReactNode;
}


export const PrivateRoute = ({ children}:PrivateRouteProps) => {
  const { isAuth } = useContext(AuthContext);
  const navigate=useNavigate();


 useEffect(()=>{
  if(!isAuth){
    return navigate("/logIn")
  }
 },[isAuth])
 return <>{children}</>
};
