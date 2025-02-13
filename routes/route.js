import express from "express";
const router = express.Router();

import {pendingorders,complete,cancel} from "../controller/ordercontroller.js"
import {addproducts} from "../controller/productcontroller.js"

//orders routes
router.get("/pendingorders",pendingorders);
router.get("/complete",complete);
router.get("/cancel",cancel);

// products routes

router.post("/addproducts",addproducts);


export default router;