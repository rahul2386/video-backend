import dotenv from "dotenv";
import connectDB from "./db/index.js";

dotenv.config({
    path: './env'
})

connectDB()
.then(() => {
    app.listen(process.env.PORT || 5000, () => {
        console.log(`server is ruuning at ${process.env.PORT}`);
    })
})
.catch((err) => {
    console.log("MangoDB connection failed !!! ", err);
})