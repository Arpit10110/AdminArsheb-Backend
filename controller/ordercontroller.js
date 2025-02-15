import {OrderModel} from "../model/OrderModel.js"

export const pendingorders = async(req,res)=>{
    try {

        const orders = await OrderModel.find({ status: "pending" });

        return (
            res.json({
                status:true,
                data:orders
            })
        )
        
    } catch (error) {
        return (
            res.json({
                status: false,
                message:error
            })
        )
    }
}
export const complete = async(req,res)=>{
    try {

        const orders = await OrderModel.find({ status: "completed" });

        return (
            res.json({
                status:true,
                data:orders
            })
        )
        
    } catch (error) {
        return (
            res.json({
                status: false,
                message:error
            })
        )
    }
}

export const cancel = async(req,res)=>{
    try {

        const orders = await OrderModel.find({ status: "cancel" });

        return (
            res.json({
                status:true,
                data:orders
            })
        )
        
    } catch (error) {
        return (
            res.json({
                status: false,
                message:error
            })
        )
    }
}



export const orderdetails = async(req,res)=>{
    try {

        const {id} = await req.body; 

        const orders = await OrderModel.findById(id)

        return (
            res.json({
                status:true,
                data:orders
            })
        )
        
    } catch (error) {
        return (
            res.json({
                status: false,
                message:error
            })
        )
    }
}