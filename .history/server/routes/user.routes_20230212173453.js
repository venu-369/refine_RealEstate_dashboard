import express from "express";

//Import all the controllers
import {
  createUser,
  getAllUsers,
  getUserInfoById,
} from "../controllers/user.controller";

const router = express.router();
