//하단의 코드들은 app.js에서 전역적으로 사용할 수 있도록 app.js파일의 코드에 위치해있다.
import routes from "./routes"; // add to object(routes.js)


//export함수 지정
export const localsMiddleware = (req,res,next) => {
    res.locals.siteName = "JunTube";
    res.locals.routes = routes; // add to object(routes.js)
    next();
}