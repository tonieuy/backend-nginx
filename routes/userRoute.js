import express from "express";
import {getUsers, getUsersByid, createUser, updateUser, deleteUser} from "../controller/usercont.js";

const router = express.Router();

router.get('/users', getUsers);
router.get('/users/:id', getUsersByid);
router.post('/users', createUser);
router.patch('/users/:id', updateUser);
router.delete('/users/:id', deleteUser);


export default router;