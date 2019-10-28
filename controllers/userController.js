// globalRouter.js에서 활용할 함수들
export const join = (req,res) => res.send("Join");
export const login = (req,res) => res.send("Login");
export const logout = (req,res) => res.send("Logout");

// userRouter.js에서 활용할 함수들
export const users = (req,res) => res.send("USERS!!");
export const userDetail = (req,res) => res.send("userDetail!!");
export const editProfile = (req,res) => res.send("editProfile!!");
export const changePassword = (req,res) => res.send("changePassword!!");