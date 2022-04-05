import LoginScreen from "../components/LoginScreen";
import SignUpScreen from "../components/SignUpScreen";
import Subscriptions from "../components/Subscriptions";

import {
    BrowserRouter,
    Routes,
    Route,
} from "react-router-dom";

export default function AppRoute () {
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<LoginScreen/>} />
                <Route path="/sign-up" element={<SignUpScreen />} />
                <Route path="/subscriptions" element={<Subscriptions />} />
            </Routes>
        </BrowserRouter>
    )
}