import { asyncHandler } from "../utils/asyncHandler.js";

export const userRegister = asyncHandler(async (req, res)=>{
    res.status(200).json({
        message: 'Good to Go Register!'
    })
})

export const userLogin = asyncHandler(async (req, res)=>{
    res.status(200).json({
        message: 'Good to Go Login!'
    })
})