import { Router } from "express";

const route = Router();
export default (app) => {
    app.use("/logout", route);
    route.get("/", (req, res, next) => {
        console.log("logout");
        res.clearCookie("R_AUTH");

        res.status.json({
            message: "logout",
        });
    });

    return app;
};
