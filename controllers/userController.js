// globalRouter.js에서 활용할 함수들
export const join = (req,res) => res.render("Join", { pageTitle : "user"});
export const login = (req,res) => res.render("Login", { pageTitle : "Login"});
export const logout = (req,res) => res.render("Logout", { pageTitle : "Logout"});

// userRouter.js에서 활용할 함수들
export const users = (req,res) => res.render("USERS!!", { pageTitle : "USERS"});
export const userDetail = (req,res) => res.render("userDetail!!", { pageTitle : "userDetail"});
export const editProfile = (req,res) => res.render("editProfile!!", { pageTitle : "editProfile"});
export const changePassword = (req,res) => res.render("changePassword!!", { pageTitle : "changePassword"});

