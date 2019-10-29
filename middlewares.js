import routes from "./routes"; // add to object(routes.js)

export const localsMiddleware = (req,res,next) => {
    res.locals.siteName = "JunTube";
    res.locals.routes = routes; // add to object(routes.js)
    next();
}