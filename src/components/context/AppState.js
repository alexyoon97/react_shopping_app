import React,{useState} from "react";
import AppContext from '../context/app-context'

const AppState = (props) =>{
  const [cart, setCart] = useState([]);
  const [user,setUser] = useState({
    email:'',
    phone:'',
    Fname:'',
    Lname:'',
    address:'',
    city:'',
    country:'',
    province:'',
  })

    return(
        <AppContext.Provider value={{
            cart,
            setCart,
            user,
            setUser
        }}>
            {props.children}
        </AppContext.Provider>
    )
}
export default AppState