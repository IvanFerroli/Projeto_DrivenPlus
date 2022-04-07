import React, {useState} from "react";
import Routes from "../routes/Routes";

import "../assets/css/reset.css";
import "../assets/css/styles.css";

import UserContext from "../context/UserContext";

export default function App () {
    const [userData, setUserData] = useState({});
    return(
        <>
            <UserContext.Provider value={{userData, setUserData}}>
                <Routes/>
            </UserContext.Provider>
        </>
    )
}
    