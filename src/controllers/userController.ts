import { NextFunction, Request, Response } from "express";

export const getAllUser = (req : Request , res: Response , next : NextFunction)=>{
 
    const users : string[] =  ["A", "B", "C", "D", "E", "F"];

    res.json({
        users
    })
}