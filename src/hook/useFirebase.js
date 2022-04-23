import { onAuthStateChanged } from "firebase/auth";
import { useEffect, useState } from "react";
import auth from "../firebase.init";

const useFirebase = () => {
  const [user, setUser] = useState({});
  
   useEffect(()=>{
    onAuthStateChanged(auth, (user) => {
      setUser(user)
        
    
    })


    return ()=>{
      setUser({})
    }
   },[])
  

     return {user,setUser}

 }

 export default useFirebase;
