import LoginScreen from "../components/LoginScreen";
import SignUpScreen from "../components/SignUpScreen";
import Subscriptions from "../components/Subscriptions";
import Subscriptions1 from "../components/Subscriptions1";
import Subscriptions2 from "../components/Subscriptions2";
import Subscriptions3 from "../components/Subscriptions3";

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
                <Route path="/subscriptions/1" element={<Subscriptions1 />} />
                <Route path="/subscriptions/2" element={<Subscriptions2 />} />
                <Route path="/subscriptions/3" element={<Subscriptions3 />} />
            </Routes>
        </BrowserRouter>
    )
}