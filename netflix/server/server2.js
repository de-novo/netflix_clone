// //server 기본설정
// const express = require("express"); //express
// const { MongodbUrl } = require("./MongodbUrl");
// const mongoose = require("mongoose");
// const port = 4000; // 따로 파일작성  config

// //express
// const app = express();
// const http = require("http").createServer(app);

// //model
// const CounterModel =  require('./models/counter')

// app.use(express.json());

// // app.use(express.urlencoded({extended:true}));

// //db설정
// http.listen(port, () => {
//     console.log(`Listening on ${port}`);
// });



// CounterModel.findOne({name:'userCount'},(err,data)=>{
//     console.log(data)
// })


// // sign 회원가입
// app.post("/api", (req, res, next) => {
//     console.log(req.body.Email);
//     // req.body.Email ? ((signData = { ...req.body }), res.send("확인")) : res.sendStatus(403);
//     signData = { ...req.body };
//     db.collection("user").findOne({ Email: signData.Email }, (error, result) => {
//         if (error) {
//             console.log("error:", error);
//         }
//         console.log(result);
//         if (result) {
//             res.send(true);
//         } else {
//             res.send(false);
//         }
//     });

//     console.log(signData);
//     // req.body?.Email
//     //     ? () => {
//     //         signData = { ...req.body };
//     //         console.log(signData)
//     //          res.send("확인");
//     //       }
//     //     : res.sendStatus(403);
// });

// app.get("/api", (req, res, next) => {
//     res.send(signData);
// });

// app.post("/api/signup/regform", (req, res, next) => {
//     console.log(req.body);

//     let newUser = {
//         ...req.body,
//     };

//     db.collection("counter").findOne({ name: "userCount" }, (error, result) => {
//         console.log(result);
//         let count = result.count;
//         console.log(count);
//         newUser._id = count + 1;
//         db.collection("user").insertOne(newUser, (error, result) => {
//             if (error) {
//                 return console.log("error:", error);
//             }
//             console.log(result);
//             db.collection("counter").updateOne({ name: "userCount" }, { $inc: { count: 1 } }, (error, result) => {
//                 console.log(result);
//                 if (error) {
//                     return console.log("error:", error);
//                 }
//                 res.send("true");
//             });
//         });
//     });

//     // res.send(res.statusCode.status);
// });
