// globalRouter.js에서 활용할 함수들
// res.render(템플리,템플릿추가할 정보담긴 객체)
export const home = (req,res) => res.render("home", {pageTitle:"Home"}); // home is home.pug, 'pageTitle' is variable and "Home" is value. pageTitle이 home템플릿(home.pug)로 전달된다.
export const search = (req,res) => res.render("search");
export const upload = (req,res) => res.render("upload");
export const videoDetail = (req,res) => res.render("videoDetail");
export const editVideo = (req,res) => res.render("editVideo");
export const deleteVideo = (req,res) => res.render("deleteVideo");