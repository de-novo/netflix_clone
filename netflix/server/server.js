//server 기본설정
const express = require("express"); //express
const port = 4000; // 따로 파일작성  config

//express
const app = express();
const http = require("http").createServer(app);

//db설정
const MongoClient = require("mongodb").MongoClient; // mongodb 설정

let db;
MongoClient.connect(MongodbUrl, (error, client) => {
    if (error) {
        return console.error("ERROR:", error);
    }

    db = client.db("NETFLIX_CLONE");

    http.listen(port, () => {
        console.log(`Listening on ${port}`);
        console.log(`MongoDB connected`);
    });
});
