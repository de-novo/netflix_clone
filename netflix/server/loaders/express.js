import express from "express";
import path from "path";
import cookieParser from "cookie-parser";
import config from "../config/index.js";
import routes from '../api/index.js'


export default (app) => {
    const whitelist = ["http://localhost:3000"];

    app.use(express.json());
    app.use(express.urlencoded({ extended: true }));
    app.use(cookieParser());

    app.use(config.api.prefix,routes());
};
