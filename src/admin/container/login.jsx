import React from "react";
import { AuthingGuard } from "@authing/react-ui-components";
import "@authing/react-ui-components/lib/index.min.css";
import { saveLoginData } from "../utils/login";

const Login = () => {
    const appId = "6221f49890de06adf15c9b6f";
    const onLogin = (userInfo) => {
        saveLoginData(userInfo);
        window.location.reload();
    };
    return <AuthingGuard appId={appId} onLogin={onLogin} />;
};

export default Login;
