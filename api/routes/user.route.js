import express from "express";
import { teste } from "../controller/user.controller.js";

const router = express.Router();

//com controller
router.get('/teste', teste);

//Primeiro exemplo sem controller
// router.get('/test', (req, res) => {
//     res.json({
//         message: "te amo weio",
//     });
//     }
// );
export default router;