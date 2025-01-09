import app from "./app.js";
import { connectdb } from "./db/db.js";
connectdb();
app.listen(process.env.PORT, ()=>{
    console.log(`listening on port ${process.env.PORT}`);
})