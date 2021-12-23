const express = require("express");
const router = express.Router();
const crypto = require("crypto");
const session = require("express-session");


const { MongodbUrl } = require('../../MongodbUrl');
const MongoClient = require("mongodb").MongoClient;
MongoClient.connect(mongodburl, (error, client) => {
    if (error) return console.log("에러", error);

    db = client.db("DENOVO");
});