import express from "express";
const router = express.Router();

import {pendingorders,complete,cancel} from "../controller/ordercontroller.js"

//orders routes
router.get("/pendingorders",pendingorders);
router.get("/complete",complete);
router.get("/cancel",cancel);


export default router;