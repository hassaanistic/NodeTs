import express , {Router} from "express";
import { getAllUser } from "../controllers/userController.js";

const router : Router = express.Router();

router.get('/all', getAllUser);
export default router;