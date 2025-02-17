import { OrderModel } from "../model/OrderModel.js"


export const acceptorder  = async(req, res) =>{
    try {
            const {id} = await req.body;

            const order = await OrderModel.findById(id);

            order.status ="completed";

            await order.save();

            return res.json({
                success: true,
                message: "Order accepted successfully"
            })

    } catch (error) {
        return res.json({
            success: false,
            message: error.message
        })
    }
}


export const cancelorder  = async(req, res) =>{
    try {
            const {id,cancelmessage} = await req.body;

            const order = await OrderModel.findById(id);

            order.status ="cancel";

            order.ordermessage = cancelmessage;

            await order.save();

            return res.json({
                success: true,
                message: "Order cancelled successfully"
            })

    } catch (error) {
        return res.json({
            success: false,
            message: error.message
        })
    }
}