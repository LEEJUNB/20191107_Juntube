// globalRouter.js에서 활용할 함수들
export const home = (req,res) => res.render("home"); // home is home.pug
export const search = (req,res) => res.render("search");
export const upload = (req,res) => res.render("upload");
export const videoDetail = (req,res) => res.render("videoDetail");
export const editVideo = (req,res) => res.render("editVideo");
export const deleteVideo = (req,res) => res.render("deleteVideo");
