import React from "react";
import Temp from "./components/Temp";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import fetchProfile from "./redux/profile/action";

const App=()=>{
    const profileData=useSelector(state=>state.profile)
    const dispatch=useDispatch();

    useEffect(()=>{
        dispatch(fetchProfile())
    },[dispatch])
    console.log(profileData)
    return <div><h1><Temp/></h1></div>
}
export default App;