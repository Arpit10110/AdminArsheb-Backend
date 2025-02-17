import express from "express";
const router = express.Router();

import {pendingorders,complete,cancel,orderdetails} from "../controller/ordercontroller.js"
import {addproducts} from "../controller/productcontroller.js"
import {acceptorder,cancelorder} from "../controller/Orderaction.js"

//orders routes
router.get("/pendingorders",pendingorders); 
router.get("/complete",complete);
router.get("/cancel",cancel);
router.post("/orderdetails",orderdetails);

// products routes
router.post("/addproducts",addproducts);

//order actions routes
router.post("/acceptorder",acceptorder);
router.post("/cancelorder",cancelorder);

export default router;