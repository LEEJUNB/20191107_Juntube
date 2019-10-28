import express from "express";
export const userRouter = express.Router(); // express muldule's property && app.js use this file that is router.js
// +. Router is file that have many route
// Purpose of userRouter : it has a URL associated with the user.
userRouter.get("/", (req,res) => {
    console.log("/user!!!");
    res.send("user index"); // localhost:4000/user 접속시 사용됨)
});

userRouter.get("/edit", (req,res) => res.send("user edit")); // localhost:4000/user/edit
userRouter.get("/password", (req,res) => res.send("user password")); // localhost:4000/user/password