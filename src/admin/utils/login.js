export const getLoginStatus = () => {
    let isLogin = false;
    const { token, tokenExpiredAt } = window.localStorage;
    const currentTime = new Date().getTime();
    const expiredTime = new Date(tokenExpiredAt).getTime();
    if (token && currentTime <= expiredTime) {
        isLogin = true;
    }

    if (!isLogin) {
        removeLoginData();
    }
    return isLogin;
};


export const saveLoginData = (userInfo) => {
    const { token, tokenExpiredAt, photo } = userInfo;
    window.localStorage.token = token;
    window.localStorage.tokenExpiredAt = tokenExpiredAt;
    window.localStorage.photo = photo;
}

export const removeLoginData = () => {
    window.localStorage.removeItem("token");
    window.localStorage.removeItem("tokenExpiredAt");
    window.localStorage.removeItem("photo");
}