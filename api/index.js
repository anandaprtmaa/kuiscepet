import express from "express";
import {client} from "./db.js";
const app = express();

//middleware

//
app.use((req, rest, next) => {
  console.log("ada request masuk");
  next();
});

//route
app.get("/api/salam", (req, res) => {
  res.send("Assalamualaikum Mas Rom Ganteng");
});


app.get("/api/mahasiswa",async(req,res)=>{
  // res.send(await (await client.query("SELECT * FROM mahasiwa")).rows);
  const results=await client.query("SELECT * FROM mahasiswa");
  res.send(results.rows);
});





app.listen(3000, () => {
  console.log("Berhasil Jalan");
});
